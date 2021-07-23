import { LoginComponent } from './inicial/login/login.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
 //   children: [
   //   { path: '', component: TaskListComponent },
    //  { path: 'new', component: TaskFormComponent },
    //  { path: 'edit/:id', component: TaskFormComponent },
 //   ],
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    component: LoginComponent,
    children: [
   //   { path: '', redirectTo: 'login', pathMatch: 'full' },
    //  { path: 'login', component: LoginComponent },
   //   { path: 'create-account', component: CreateAccountComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
