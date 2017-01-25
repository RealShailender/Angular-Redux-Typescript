import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CounterComponent } from './components/counter/counter.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent},
  { path: '', component: CounterComponent, pathMatch: 'full'}  
];

export const routing : ModuleWithProviders= RouterModule.forRoot(routes);
