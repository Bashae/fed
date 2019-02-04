import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-feeding',
  templateUrl: './feeding.page.html',
  styleUrls: ['./feeding.page.scss'],
})
export class FeedingPage implements OnInit {
  amounts_oz: number = 3;
  amounts_ml: number = 90;
  is_ml: boolean = false;
  AOZ: any = 0;

  constructor(
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  changeAmount(ev) {
    console.log(ev.detail.value);
    if(this.is_ml) {
      this.amounts_ml = ev.detail.value.trim();
    } else {
      this.amounts_oz = ev.detail.value;
    }
  }

  changeType() {
    this.is_ml = !this.is_ml;
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}