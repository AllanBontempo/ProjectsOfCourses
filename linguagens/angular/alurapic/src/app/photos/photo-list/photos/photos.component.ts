import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Photo} from "../../photo/photo";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // @ts-ignore
    if (!!changes.photos) {
      this.rows = this.groupColums(this.photos);
    }

  }

  groupColums(photos: Photo[]) {
    const newRows = [];
    let i = 0;
    for (i; i < photos.length; i += 3) {
      newRows.push(photos.slice(i, i + 3))
    }

    console.log(newRows)
    return newRows;
  }

}
