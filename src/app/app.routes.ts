import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }

];
//export const routing = RouterModule.forRoot(appRoutes);
export const appRouting = RouterModule.forRoot(appRoutes, { useHash: true });
