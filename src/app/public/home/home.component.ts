import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {
  public data: any[] = [];
  public collectionName:string='profile';
  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    AOS.init();
    // Fetch data on component load
    this.firestoreService.getData(this.collectionName).subscribe((res) => {
      this.data = res;
    });
  }
  ngAfterViewInit(): void {
    AOS.refresh(); // Refresh AOS after content load
  }
  saveData() {
    const sampleData = { name: 'John Doe', age: 30 ,address:'Dhaka'};
    this.firestoreService.saveData(this.collectionName, sampleData)
      .then(() => console.log('Data saved successfully'))
      .catch((error) => console.error('Error saving data', error));
  }

  //Edit existing data
  editData(id: string) {
    const updatedData = { name: 'Jane Doe', age: 32 };
    this.firestoreService.updateData(this.collectionName, id, updatedData)
      .then(() => console.log('Data updated successfully'))
      .catch((error) => console.error('Error updating data', error));
  }

  // Delete existing data
  deleteData(id:string) {
    this.firestoreService.deleteData(this.collectionName, id)
      .then(() => console.log('Data deleted successfully'))
      .catch((error) => console.error('Error deleting data', error));
  }

  
}
