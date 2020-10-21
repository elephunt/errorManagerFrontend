import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import {ErrorService} from './errorService';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {AppDialogErrorComponent} from './dialog';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    AppDialogErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [ErrorService],
  bootstrap: [AppComponent],
  entryComponents: [AppDialogErrorComponent]
})
export class AppModule { }
