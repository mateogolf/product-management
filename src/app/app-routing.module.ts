import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { Page404Component } from './page-404/page-404.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'products',pathMatch:'full',component:ListComponent},//,children:[
  { path: 'products/new', pathMatch: 'full', component: NewComponent },
  { path: 'products/edit/:id', component: EditComponent },
  { path: 'products/delete/:id', component: DeleteComponent },
  // ]},
  {
    path: '**',
    component: Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
