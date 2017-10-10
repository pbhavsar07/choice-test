import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/Authenticate/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit() {
  }

  validuser = false;
  onSignin(form: NgForm)
  {
    const user = form.value.username;
    const pass = form.value.password;
    this.authService.signinUser(user,pass);
   
  }
}
