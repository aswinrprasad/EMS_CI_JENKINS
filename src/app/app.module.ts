import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Nav } from './nav/nav.component';
import { InsertComponent } from './insert/insert.component';
import { DeleteComponent } from './delete/delete.component';
import { FindComponent } from './find/find.component';
import { FindAllComponent } from './find-all/find-all.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';

const ROUTES:Routes = [
  {path :'insert', component : InsertComponent },
  {path :'delete', component : DeleteComponent },
  {path :'update', component : UpdateDetailsComponent },
  {path :'find', component : FindComponent },
  {path :'findall', component : FindAllComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    Nav,
    InsertComponent,
    DeleteComponent,
    FindComponent,
    FindAllComponent,
    UpdateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
