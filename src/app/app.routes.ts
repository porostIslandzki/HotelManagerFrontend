import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoomsearchComponent } from './roomsearch/roomsearch.component';

export const routes: Routes = [
  { path: '', component: RoomsearchComponent }, // <-- główna strona
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // dodaj kolejne trasy według potrzeb
];
