import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private dataSource = new BehaviorSubject<any>(null); // Initial shared data is null
  currentData = this.dataSource.asObservable(); // Observable for components to subscribe to

  constructor() {}

  // Method to update shared data
  updateData(data: any) {
    this.dataSource.next(data);
  }
}
