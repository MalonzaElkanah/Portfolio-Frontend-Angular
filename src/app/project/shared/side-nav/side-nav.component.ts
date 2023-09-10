import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { KeywordList, ProjectList, Project } from '../../project';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  keywords: KeywordList | undefined;

  @Input() pageTitle = "All Projects";
  @Input() keyword = "All";

  searchForm = new FormGroup({
    search: new FormControl('')
  });

  @Output() newProjectEvent = new EventEmitter<ProjectList>();
  @Output() newKeywordProjectEvent = new EventEmitter<[Project]>();
  @Output() newKeywordEvent = new EventEmitter<string>();
  @Output() newpageTitleEvent = new EventEmitter<string>();

  constructor(private projectService: ProjectService) {
    this.projectService.getAllKeywords().subscribe((keywords: KeywordList) => {
      this.keywords = keywords;
    });
  }

  searchProjects(search: string): void {
    this.newpageTitleEvent.emit(`'${search}' Search Results`);

    if (this.keyword === "All") {
      this.newProjectEvent.emit(undefined);

      this.projectService.getAllProjects(search).subscribe((projects: ProjectList) => {
        this.newProjectEvent.emit(projects);
      });
    } else {
      this.newKeywordProjectEvent.emit(undefined);

      this.projectService.getKeywordProjects(this.keyword, search).subscribe((projects: [Project]) => {
        this.newKeywordProjectEvent.emit(projects);
      });
    }  

  }

  getKeywordProjects(keyword: string): void {
    this.keyword = keyword;
    this.newKeywordEvent.emit(keyword);
    this.newpageTitleEvent.emit("Projects")
    this.newKeywordProjectEvent.emit(undefined);

    this.projectService.getKeywordProjects(keyword).subscribe((projects: [Project]) => {
      this.newKeywordProjectEvent.emit(projects);
    });
  } 

}
