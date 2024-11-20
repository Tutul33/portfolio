import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent {
  profiles!: any[];
  public collectionName:string='profile';
  constructor(private firestoreService: FirestoreService,private router:Router,private dataTransferSvc:DataTransferService) {}

  ngOnInit() {
    this.firestoreService.getData(this.collectionName).subscribe(
      (data) => {
        this.profiles = data;
        console.log('Profiles retrieved:', this.profiles);
      },
      (error) => {
        console.error('Error retrieving profiles:', error);
      }
    );
  }

  edit(profile:any){
     try {
      this.dataTransferSvc.updateData(profile);
        this.router.navigate(['/private/profileEntry']);
     } catch (error) {
      
     }
  }
  delete(profile:any){
     try {
      this.profiles=this.profiles.filter(x=>x.id!=profile.id);
      this.firestoreService.deleteData(this.collectionName,profile.id);
     } catch (error) {
      
     }
  }
  addNewProfile(){
    try {
      this.router.navigate(['/private/profileEntry']);
    } catch (error) {
      
    }
  }
}
