import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- 
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ProductService} from './product.service';
import { Page404Component } from './page-404/page-404.component';
import { DeleteComponent } from './delete/delete.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    EditComponent,
    NewComponent,
    Page404Component,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
