import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsSignedInGuard } from './pages/auth/guard/is-signed-in.guard';
import { HasAccessGuard } from './pages/dashboard/guard/has-access.guard';

const routes: Routes = [
  { 
    path: 'auth', 
    canActivate: [IsSignedInGuard], 
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: 'dashboard', 
    canLoad: [HasAccessGuard], 
    canActivate: [HasAccessGuard], 
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  { 
    path: '', 
    pathMatch: 'full', 
    redirectTo: 'auth'
  },
  {
    path: '**', 
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
