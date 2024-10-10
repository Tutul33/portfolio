import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //component: ,
    children: [
      {
        path: '', 
        loadChildren: () =>
          import('./parent/parent.module').then((m) => m.ParentModule),
      },
    ],
  },
  {
    path: 'private',
    //component: ,
    children: [
      {
        path: '', 
        loadChildren: () =>
          import('./private/private.module').then((m) => m.PrivateModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
