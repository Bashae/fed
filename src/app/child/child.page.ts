import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-child',
  templateUrl: './child.page.html',
  styleUrls: ['./child.page.scss'],
})
export class ChildPage implements OnInit {

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
