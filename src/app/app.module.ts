import { BrowserModule } from '@angular/platform-browser';


import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OfertaPrecisoComponent } from './oferta-preciso/oferta-preciso.component';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule,MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    OfertaPrecisoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
