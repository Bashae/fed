import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeedingPage } from '../feeding/feeding.page';
import { ChildPage } from '../child/child.page';
import { FirebaeService } from '../firebae.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public modalCtrl: ModalController,
    public fb: FirebaeService,
    public user: UserService
  ) {}

  async addFeeding() {
    const modal = await this.modalCtrl.create({
      component: FeedingPage
    });

    return await modal.present();
  }

  async addChild() {
    const modal = await this.modalCtrl.create({
      component: ChildPage
    });

    return await modal.present();
  }
}
