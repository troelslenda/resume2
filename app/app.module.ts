import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { routing } from './app.router';

import { HelloComponent }  from './hello/hello.component';
import { WorkComponent }  from './work/work.component';
import { SportComponent } from './sport/sport.component';
import { IpscComponent } from './ipsc/ipsc.component';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [ AppComponent, HelloComponent, WorkComponent, SportComponent, IpscComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
