import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAxewJxIFqlKaI5lGvSOnqP8cBHZADh2v4",
    authDomain: "profilestore-87502.firebaseapp.com",
    projectId: "profilestore-87502",
    storageBucket: "profilestore-87502.appspot.com",
    messagingSenderId: "119648305117",
    appId: "1:119648305117:web:d3315294cffdaddf474034",
    measurementId: "G-TPLPTSR76Y"
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,  // Firestore module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

