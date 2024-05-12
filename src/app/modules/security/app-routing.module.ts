import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../share/guard/auth.guard';
import { adminGuard } from '../share/guard/admin.guard';


const routes: Routes = [
  {
    path: '', redirectTo: 'client', pathMatch: 'full'
  },
  {
    path: 'client',
    loadChildren: () => import('../client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'console',
    loadChildren: () => import('../console/console.module').then(m => m.ConsoleModule),
    canActivate: [AuthGuard , adminGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard],

  },

  {
    path: 'security',
    loadChildren: () => import('./security.module').then(m => m.SecurityModule)

  },
  {
    path: 'share',
    loadChildren: () => import('../share/share.module').then(m => m.ShareModule),
    // canActivate: [AuthGuard]
  },
  { path: 'book', loadChildren: () => import('../book/book.module').then(m => m.BookModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
