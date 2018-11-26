import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  { path: '**', component: HomeComponent }

];
//export const routing = RouterModule.forRoot(appRoutes);
export const appRouting = RouterModule.forRoot(appRoutes, { useHash: true });
