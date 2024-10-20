import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { filter, from, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth) {}
// Method to save data to a specific Firestore collection
// saveData(collectionName: string, data: any): Promise<void> {
//   const id = this.firestore.createId(); // Generate a unique ID for the document
//   return this.firestore.collection(collectionName).doc(id).set({ ...data, id });
// }

// Method to get data from a specific Firestore collection
getData(collectionName: string): Observable<any[]> {
  return this.firestore.collection(collectionName).snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as any;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );
}

// Method to update a document in Firestore
// updateData(collectionName: string, id: string, data: any): Promise<void> {
//   return this.firestore.collection(collectionName).doc(id).update(data);
// }

// Method to delete a document from Firestore
// deleteData(collectionName: string, id: string): Promise<void> {
//   return this.firestore.collection(collectionName).doc(id).delete();
// }  
  
/// Save data (create)
async saveData(collectionName: string, data: any): Promise<any> {
  const user = await this.afAuth.currentUser;
  if (user) {
    return this.firestore.collection(collectionName).add({ ...data, userId: user.uid });
  } else {
    throw new Error('User is not authenticated');
  }
}

// Update data
async updateData(collectionName: string, id: string, data: any): Promise<any> {
  const user = await this.afAuth.currentUser;
  if (user) {
    return this.firestore.collection(collectionName).doc(id).update(data);
  } else {
    throw new Error('User is not authenticated');
  }
}

// Delete data
async deleteData(collectionName: string, id: string): Promise<any> {
  const user = await this.afAuth.currentUser;
  if (user) {
    return this.firestore.collection(collectionName).doc(id).delete();
  } else {
    throw new Error('User is not authenticated');
  }
}
}
