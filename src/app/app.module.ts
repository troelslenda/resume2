import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

import { AppComponent }   from './app.component';
import { routing }        from './app.router';

import { HelloComponent } from './hello/hello.component';
import { WorkComponent }  from './work/work.component';
import { SportComponent } from './sport/sport.component';
import { githubRibbon }   from './githubribbon/githubribbon.component';
import { IpscComponent }  from './ipsc/ipsc.component';
import {EndomondoComponent} from "./sport/endomondo.component";
//import { ProjectsComponent }  from './project/projects.component';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule,
  ],
  declarations: [ AppComponent, HelloComponent, WorkComponent, SportComponent, IpscComponent, githubRibbon, EndomondoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
