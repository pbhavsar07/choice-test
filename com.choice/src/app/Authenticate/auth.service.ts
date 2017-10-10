// import everything from firebase
import * as firebase from 'firebase';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService
{

    token: string;
   validuser = false;

   constructor(private router: Router){}
    signupUser(email: string,password: string)
    {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(
            error => console.log(error)
        )
    }
    signinUser(email: string,password: string)
    {
       var value =  firebase.auth().signInWithEmailAndPassword(email,password)
        .then(// we could return the promise , then block returns a promise i.e handles successful response and catch block returns errors i.e handles Errors
            response => { 
                firebase.auth().currentUser.getToken()
                .then(
                    (token: string) => { 
                        this.token = token;
                         this.validuser = true;
                         console.log("valid user"+this.validuser);
                         console.log("in response");
                         this.router.navigate(['/header']);
                      }
                )
             }
        )
        .catch(
            error => { console.log("Error: "+error); 
                        this.validuser = false; 
                    }
        );


        console.log("user: "+this.validuser);
    }

    getToken()
    {
        // returning a promise //Aysnchronous action
        // it not only checks(firebase) the user id and password from local database but also checks the validity of that token
        firebase.auth().currentUser.getToken()
        .then(
                    (token: string) => this.token = token
                );
                console.log("toek - "+this.token);
        return this.token;

    }

    isAuthenticated()
    { //rertunr true when token is not null like it is present
        return this.token!=null;

    }

    logout()
    {
        firebase.auth().signOut();
        this.token = null;
    }

}