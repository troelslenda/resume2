import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { routing } from './app.router';

import { HelloComponent }  from './hello/hello.component';
import { WorkComponent }  from './work/work.component';
import { SportComponent } from './sport/sport.component';
import { githubRibbonComponent } from './githubribbon/githubribbon.component';
import { IpscComponent } from './ipsc/ipsc.component';
import { ProjectsComponent }  from './project/projects.component';

@NgModule({
  imports: [
    BrowserModule,
    routing
    /*RouterModule.forRoot([
      { path: 'work', component: WorkComponent },
      { path: '', component: HelloComponent }
    ])*/
  ],
  declarations: [ AppComponent, HelloComponent, WorkComponent, SportComponent, IpscComponent, githubRibbonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
