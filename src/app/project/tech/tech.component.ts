import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project, ProjectList } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  projects: [Project] | undefined;
  keyword: string = " ";
  pageTitle = "Projects";

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const keyword = this.route.snapshot.params['keyword'];
    this.keyword = keyword;

    this.projectService.getKeywordProjects(keyword).subscribe((projects: [Project]) => {
      this.projects = projects;
    });
  }

  newProjects(projects: [Project]){
    this.projects = projects;
  }

  newKeyword(keyword: string) {
    this.keyword = keyword;
  }

  newpageTitle(title: string) {
    this.pageTitle = title;
  }

}
