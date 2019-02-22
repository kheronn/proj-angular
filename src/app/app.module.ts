import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContatoFormComponent } from './contato-form/contato-form.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';
import {MatTableModule} from '@angular/material/table';
import { ContatoListComponent } from './contato-list/contato-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoFormComponent,
    ContatoListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    LocalStorageModule.forRoot({
      storageType : 'localStorage'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
