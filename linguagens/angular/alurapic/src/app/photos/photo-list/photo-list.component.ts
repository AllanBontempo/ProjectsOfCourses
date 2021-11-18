import { Component, OnInit } from '@angular/core';
import {Photo} from "../photo/photo";
import {PhotoService} from "../photo/photo.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  title = 'alurapic';

  photos: Photo[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    const userName = this.activatedRoute.snapshot.params.userName;

    this.photoService.listFromUser(userName)
      .subscribe(photo => this.photos = photo);
  }
}
