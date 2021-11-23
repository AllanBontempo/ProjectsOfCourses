import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  debounce: Subject<string> = new Subject<string>();
  filter: string = '';
  @Input() value: string = '';
  @Output() onTyping: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }

  filtrar(event: any) {
    this.debounce.next(event.target.value);
    this.debounce.pipe(debounceTime(300))
      .subscribe(filter => this.onTyping.emit(filter));
  }
}
