import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoomsearchComponent } from './roomsearch/roomsearch.component';
import { ProfileComponent } from './profile/profile.component';
import { GuardService } from './service/guard.service';
import { EditprofileComponent } from './editprofile/editprofile.component';

export const routes: Routes = [
  { path: '', component: RoomsearchComponent }, // <-- główna strona
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [GuardService]},
  { path: 'edit-profile', component: EditprofileComponent, canActivate: [GuardService]},
  {path: '**', redirectTo: 'home'}
];
