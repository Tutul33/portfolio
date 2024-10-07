import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}
// Method to save data to a specific Firestore collection
saveData(collectionName: string, data: any): Promise<void> {
  const id = this.firestore.createId(); // Generate a unique ID for the document
  return this.firestore.collection(collectionName).doc(id).set({ ...data, id });
}

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
updateData(collectionName: string, id: string, data: any): Promise<void> {
  return this.firestore.collection(collectionName).doc(id).update(data);
}

// Method to delete a document from Firestore
deleteData(collectionName: string, id: string): Promise<void> {
  return this.firestore.collection(collectionName).doc(id).delete();
}  
  
}
