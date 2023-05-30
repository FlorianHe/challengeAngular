import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 }
