import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FeedingPage } from './feeding/feeding.page';
import { SelectionOzComponent } from './selection-oz/selection-oz.component';
import { SelectionMlComponent } from './selection-ml/selection-ml.component';
import { ChildPage } from './child/child.page';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent,
  FeedingPage,
  ChildPage,
  SelectionOzComponent,
  SelectionMlComponent],
  entryComponents: [FeedingPage, ChildPage],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(), 
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
