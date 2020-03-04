import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  constructor() { }

  @Input()
  nameInComponent: string;

  @Output()
  childNameEvent = new EventEmitter<string>();

  deleteName() {
    this.childNameEvent.emit(this.nameInComponent);
  }

  ngOnInit() {
  }

}
