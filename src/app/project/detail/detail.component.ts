import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

import { Project, ProjectList } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  project: Project | undefined;

  settings = {
    counter: false
  };

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeId = this.route.snapshot.params['id'];
    const projectId = parseInt(atob(routeId), 10);

    if (projectId){

      this.projectService.getProject(projectId).subscribe((project: Project) => {
        this.project = project;
        
        const lightbox = new PhotoSwipeLightbox({
          gallery: '#aniimated-thumbnials',
          children: 'a',
          pswpModule: PhotoSwipe,
        });

        lightbox.init();
      });
    } else {
      alert("Project Not Found.");
    }
  }

  newProject(project: Project){
    this.project = project;    
  }
}
