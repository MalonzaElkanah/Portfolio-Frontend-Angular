import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project, ProjectList } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  project!: Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe((data) => {
      this.project = data["project"];
    });
  }

  ngOnInit(): void { }

  newProject(project: Project){
    this.project = project;    
  }
}
