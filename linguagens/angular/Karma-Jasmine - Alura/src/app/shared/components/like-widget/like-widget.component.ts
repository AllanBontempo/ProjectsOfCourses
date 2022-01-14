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
  public fonts = {
    faThumbsUp
  };


  constructor(
    private uniqueIdService: UniqueIdService
  ) {
  }

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueIdService.generatedUniqueIdWithPrefix('like-widget');
    }
  }

  public like(): void {
    this.liked.emit();
  }

}
