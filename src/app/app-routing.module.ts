import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employeelist.component';
import { EmployeeViewComponent } from './employeeview.component';
import { EmployeeEditComponent } from './employeeedit.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const appRoutes: Routes = [
  { path: 'Employeelist', component: EmployeeListComponent },
  { path: 'EmployeeView/:id', component: EmployeeViewComponent },
  { path: 'EmployeeEdit/:id', component: EmployeeEditComponent },
  { path: '', redirectTo: '/Employeelist', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}