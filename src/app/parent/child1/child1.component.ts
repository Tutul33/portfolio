import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  @Input() data: any; // Data received from the parent component
  @Output() updateData = new EventEmitter<any>(); // Event to send data back to the parent

  childData = '';

  sendData() {
    this.updateData.emit({ message: this.childData });
  }
}
