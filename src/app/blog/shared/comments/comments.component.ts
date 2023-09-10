import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Article, Comment } from '../../blog';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  @Input() comments: Comment[] | undefined;

  isSuccessful = false;
  isFailed = false;
  errorMessage = '';

  commentForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private blogService: BlogService) { }

  submitCommentForm(): void {
    let comment: Comment = {
      name: this.commentForm.value.name ?? '',
      email: this.commentForm.value.email ?? '',
      message: this.commentForm.value.message ?? ''
    }

    this.blogService.createComment(1, comment).subscribe(
      data => {
        this.isSuccessful = true;
        this.isFailed = false;

        alert("Comment Updated!");

        let comment_data: Comment = data; 

        this.comments?.push(comment_data);
      },
      err => {
        console.log(err);
        this.errorMessage = err.error;
        this.isFailed = true;
      }
    )
  }
}
