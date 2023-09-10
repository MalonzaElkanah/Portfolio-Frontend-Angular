import { Component } from '@angular/core';
import { KeywordList, ProjectList } from '../../project';
import { ProjectService } from '../../project.service';


@Component({
  selector: 'app-side-nav2',
  templateUrl: './side-nav2.component.html',
  styleUrls: ['./side-nav2.component.css']
})
export class SideNav2Component {
  keywords: KeywordList | undefined;
  projects: ProjectList | undefined;

  constructor(private projectService: ProjectService) {
    this.projectService.getAllKeywords().subscribe((keywords: KeywordList) => {
      this.keywords = keywords;
    });

    this.projectService.getAllProjects(undefined, 1).subscribe((projects: ProjectList) => {
      this.projects = projects;
    });
  }

  slugify(str: string): string {
    return str.toLowerCase(
      ).trim(
      ).replace(
        /[^\w\s-]/g,
        ''
      ).replace(
        /[\s_-]+/g,
        '-'
      ).replace(
        /^-+|-+$/g,
        ''
      );
  }

  binarify(int: number): string {
    return btoa(int.toString())
  }
}
