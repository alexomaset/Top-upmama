import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { UsersComponent } from './Components/users/users.component';
import { AuthGuard } from './_services/auth.guard';


const routes: Routes = [
  { path:'', component:RegistrationComponent},
  { path:'login', component:LoginComponent},
  { path: 'users', component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
