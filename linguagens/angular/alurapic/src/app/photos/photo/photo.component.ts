import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

const CLOUD = environment.ApiUrl + '/imgs/'

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  private _url!: string

  @Input() description!: string;
  @Input() set url(url: string) {
    this._url = url;
    if(!url.startsWith('data')) {
      this._url = CLOUD + url;
    } else {
      this._url = url
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  get url() {
    return this._url;
  }


}
