import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "app/home/home.component";
import { Dummy1Component } from "app/dummy1/dummy1.component";
import { Dummy2Component } from "app/dummy2/dummy2.component";
import { HeaderComponent } from "app/header/header.component";
import { LoginComponent } from "app/Authenticate/login/login.component";
import { RegisterComponent } from "app/Authenticate/register/register.component";

const appRoutes: Routes= [
{path: '',component: LoginComponent},
{path: 'dummy1',component: Dummy1Component},
{path: 'dummy2',component: Dummy2Component},
{path: 'header',component: HeaderComponent},
{path: 'Register',component: RegisterComponent},
{path: 'login',component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule{}
