import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReceiveComponent } from './receive/receive.component';
import {SharedService} from './shared.service';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceiveComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	FormsModule
	
	
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
