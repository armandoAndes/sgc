import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Output() emitInput = new EventEmitter();
  @Input() info: any;
  public data: string;
  constructor() { }

  ngOnInit() { }

  emit() {
    this.emitInput.emit(this.data);
  }
}
