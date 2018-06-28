import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() counter = 0;
  @Output() counterChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  valueChanged() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }
}
