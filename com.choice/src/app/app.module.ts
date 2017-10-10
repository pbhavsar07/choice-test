import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Dummy1Component } from './dummy1/dummy1.component';
import { Dummy2Component } from './dummy2/dummy2.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from 'app/routing-module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from 'app/Authenticate/login/login.component';
import { RegisterComponent } from 'app/Authenticate/register/register.component';
import { AuthService } from 'app/Authenticate/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    Dummy1Component,
    Dummy2Component,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
