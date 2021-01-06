import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { ErrorComponent } from './commons/error/error.component';
import { HomeComponent } from './commons/home/home.component';
import { LoginComponent } from './commons/login/login.component';
import { RegisterComponent } from './commons/register/register.component';
import { ManagerModule } from './manager/manager.module';
import { ManagerhomeComponent } from './manager/managerhome/managerhome.component';
import { Userrole } from './models/userrole';
import { ProtectedComponent } from './protected/protected.component';
import { AuthGuard } from './shared/auth.guard';
import { UserModule } from './user/user.module';
import { UserhomeComponent } from './user/userhome/userhome.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin',
    component: AdminhomeComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_ADMIN"}
  },
  {
    path: 'manager',
    component: ManagerhomeComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_MANAGER"}
  },
  {
    path: 'user/:id',
    component: UserhomeComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_USER"}
  },
  {
    path: 'user',
    component: UserhomeComponent,
    canActivate: [AuthGuard],
    data: {role: "ROLE_USER"}
  },  
  {
    path: '**',
    redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            CommonsModule,
            AdminModule,
            ManagerModule,
            UserModule
            ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
