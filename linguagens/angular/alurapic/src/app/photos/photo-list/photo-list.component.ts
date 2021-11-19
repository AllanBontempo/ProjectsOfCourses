import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {debounceTime, Subject} from "rxjs";

import {Photo} from "../photo/photo";
import {PhotoService} from "../photo/photo.service";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = []
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    //@ts-ignore
    this.userName = this.activatedRoute.snapshot.params.userName;
    //@ts-ignore
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }

  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      })
  }


  filtrar(event: any) {

    this.debounce.next(event.target.value);
    this.debounce.pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }
}