import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //providers: [AccountsService]
})
export class AppComponent implements OnInit{


  ngOnInit()
  {
   firebase.initializeApp({
     apiKey: "AIzaSyCMPEZK3ks12LGiGg2L0M37rTuazMPBtkU",
      authDomain: "new-choice-test.firebaseapp.com"
   });
  }
}

