import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {debounceTime, Subject} from "rxjs";

import {Photo} from "../photo/photo";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = []
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();

  constructor(
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //@ts-ignore
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }


  filtrar(event: any) {

    this.debounce.next(event.target.value);
    this.debounce.pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }
}
