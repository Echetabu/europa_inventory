import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { IsSignedInGuard } from './guard/is-signed-in.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { 
    path: '', 
    canActivate: [IsSignedInGuard], 
    canActivateChild: [IsSignedInGuard],
    component: AuthComponent,
    children: [
      {path:'', component: LoginComponent},
      { path: 'create-account', component: SignupComponent }
    ]
   },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
