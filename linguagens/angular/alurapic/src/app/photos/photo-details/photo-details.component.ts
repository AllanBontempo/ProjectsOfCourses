import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PhotoService} from "../photo/photo.service";
import {Photo} from "../photo/photo";
import {Observable} from "rxjs";

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$!: Observable<Photo>;
  photoId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.findPhoto();
  }

  findPhoto() {
    this.photoId = this.activatedRoute.snapshot.params['photoId'];
    this.photo$ = this.photoService.findById(this.photoId);
  }

}
