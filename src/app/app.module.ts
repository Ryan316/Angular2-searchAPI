import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { ShowHideDirective } from './showhide.directive';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShowHideDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2BootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
