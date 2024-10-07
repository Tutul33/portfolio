import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {
  @Input() data: any;
  @Output() updateData = new EventEmitter<any>();

  childData = '';

  sendData() {
    this.updateData.emit({ message: this.childData });
  }
}
