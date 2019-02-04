import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaeService {
  public childCollection: AngularFirestoreCollection;
  public children: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.childCollection = db.collection<any>('ch');
    this.childCollection.valueChanges().subscribe(ref => {
      console.log('ref');
      console.log(ref);
    });
  }
}
