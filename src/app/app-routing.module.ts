import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/main.component';

export const routes: Routes = [
    // {
    //   component: AuthComponent, path: '',
    //   data: { publicOnly: true }, 
    //   children : [
    //     {
    //       path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    //     }
    //   ]
    // },
    {
      component: MainComponent, path: '',
      canActivate: [],
      data: { publicOnly: false },
      children : [
        {
          path: '', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
        }
      ]
    }
];

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AuthComponent } from './modules/auth/auth.component';

// const routes: Routes = [
//   {
//     component: AuthComponent, path: '',
//     children : [
//       {
//         path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
//       }
//     ]
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
