import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  @Input() data: any;
  @Output() updateData = new EventEmitter<any>();

  childData = '';

  sendData() {
    this.updateData.emit({ message: this.childData });
  }
}
