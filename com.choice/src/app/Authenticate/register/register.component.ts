import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/Authenticate/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  clicked= false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSignup(form: NgForm)
  {
    const user = form.value.username;
    const pass = form.value.password;
    console.log("asd"+form.value.button1);
    
    this.authService.signupUser(user,pass);
    this.clicked = true;
    form.reset();

  }
}
