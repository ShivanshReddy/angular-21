import { Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FoodListComponent } from './admin/food-list/food-list.component';
import { FoodFormComponent } from './admin/food-form/food-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },

  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/foods', component: FoodListComponent },
  { path: 'admin/add-food', component: FoodFormComponent }
];

