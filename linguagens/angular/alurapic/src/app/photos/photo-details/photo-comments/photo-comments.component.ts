import {Component, Input, OnInit} from '@angular/core';
import {Observable, switchMap, tap} from "rxjs";
import {PhotoComment} from "../../photo/photo-comment";
import {PhotoService} from "../../photo/photo.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId!: number;
  comments$!: Observable<PhotoComment[]>;
  commentForm!: FormGroup;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.findPhoto();
    this.buildForm();
  }

  findPhoto() {
    this.comments$ = this.photoService.getComments(this.photoId);
  }

  buildForm(): void {
    this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.minLength(2), Validators.maxLength(300)]]
    });
  }

  saveComment(): void {
    const comment = this.commentForm.controls['comment'].value as string;
    this.comments$ = this.photoService.addComments(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap(() => {
        this.commentForm.reset();
      }));
  }


}
