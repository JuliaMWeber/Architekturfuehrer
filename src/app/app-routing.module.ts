import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OnepagerComponent } from './onepager/onepager.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [

  {
    // Standardroute: Umleitung auf '/home'
    path: '',
    redirectTo: 'onepager',
    pathMatch: 'full'
},
{
  path: 'onepager',
  component: OnepagerComponent
},
{
  path: 'header',
  component: HeaderComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
