import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentChildren: any[];
  currentKey: string;
  selectedChild: any;

  constructor(
    public storage: Storage
  ) {}

  addKeyToDB(key) {
    return this.storage.set('key', key);
  }

  addChildToDB(children) {
    // let childrens = [{name: "isla", birthdate: "08/23/1987", gender: "girl", shortname: "IS"}, {name: "chloe", birthdate: "08/23/1987", gender: "girl", shortname: "CH"}];
    return this.storage.set('children', children);
  }

  getChildren() {
    return this.storage.get('children');
  }

  getUser() {
    return this.storage.get('key');
  }

  generateUserKey() {
    return this.generateGUID();
  }

  generateGUID() {
    var result, i, j;
    result = '';
    for(j=0; j<15; j++) {
      if( j == 5 || j == 10 )
        result = result + '-';
      i = Math.floor(Math.random()*16).toString(16).toUpperCase();
      result = result + i;
    }
    return result;
  }

  setChildren(children) {
    this.currentChildren = children;
  }

  setKey(key) {
    this.currentKey = key;
  }
}
