// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent }  from './hello/hello.component';
import { WorkComponent }  from './work/work.component';
import { SportComponent }  from './sport/sport.component';
import { IpscComponent }  from './ipsc/ipsc.component';

// Route Configuration
export const router: Routes = [
  { path: '', redirectTo: 'hello', pathMatch : 'full' },
  { path: 'hello', component: HelloComponent },
  { path: 'sport', component: SportComponent },
  { path: 'ipsc', component: IpscComponent },
  { path: 'work', component: WorkComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(router);
