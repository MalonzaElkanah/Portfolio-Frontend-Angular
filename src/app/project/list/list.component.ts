import { Component } from '@angular/core';

import { Project, ProjectList } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  projects: ProjectList | undefined;
  pageTitle = "All Projects";

  constructor(private projectService: ProjectService) {
    this.projectService.getAllProjects().subscribe((projects: ProjectList) => {
      this.projects = projects;
    });
  }

  pageProjects(page: number) {
    this.projectService.getAllProjects(undefined, page).subscribe((projects: ProjectList) => {
      this.projects = projects;
    });
  }

  newProjects(projects: ProjectList){
    this.projects = projects;
  }

  newpageTitle(title: string) {
    this.pageTitle = title;
  }
}
