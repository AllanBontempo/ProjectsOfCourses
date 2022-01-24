import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {UniqueIdService} from '../../services/unique-id/unique-id.service';


@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss']
})
export class LikeWidgetComponent implements OnInit {

  // @ts-ignore
  @Output() public liked = new EventEmitter<void>();
  @Input() public id: string = null;
  @Input() public likes: number;
  @Input() public prefix: string = null;
  public fonts = {
    faThumbsUp
  };


  constructor(
    private uniqueIdService: UniqueIdService
  ) {
  }

  ngOnInit(): void {
    if (!this.id) {
      const prefrix = this.prefix ? this.prefix : 'like-widget';
      this.id = this.uniqueIdService.generatedUniqueIdWithPrefix(prefrix);
    }
  }

  public like(): void {
    this.liked.emit();
  }

}
