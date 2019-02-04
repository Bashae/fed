import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private user: UserService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.initializeUser();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initializeUser() {
    this.user.getUser().then((key) => {
      let userKey = key;
      
      if(key === null) {
        userKey = this.user.generateUserKey();
        this.user.addKeyToDB(userKey).then(key => {
          this.user.setKey(userKey);
        })
      } else {
        this.user.setKey(userKey);
      }

    });

    this.user.getChildren().then(children => {
      if(children !== null) {
        this.user.setChildren(children);
      } else {
        console.log('children is null');
        // alert, you have no children, add a child to get started.
      }
    })
  }
}
