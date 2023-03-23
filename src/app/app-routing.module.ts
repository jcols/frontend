import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EditComponent } from './components/edit/edit.component';
import { EditskillComponent } from './editskill/editskill.component';
import { EdittrabajoComponent } from './edittrabajo/edittrabajo.component';
import { EditaboutComponent } from './editabout/editabout.component';
import { EditidiomaComponent } from './editidioma/editidioma.component';
import { EditeducacionComponent } from './editeducacion/editeducacion.component';
import { EditproyectoComponent } from './editproyecto/editproyecto.component';
import { NewskillComponent } from './newskill/newskill.component';
import { NewtrabajoComponent } from './newtrabajo/newtrabajo.component';
import { NewproyectoComponent } from './newproyecto/newproyecto.component';
import { NeweducacionComponent } from './neweducacion/neweducacion.component';
import { NewidiomaComponent } from './newidioma/newidioma.component';
import { NewComponent } from './components/new/new.component';
import { AuthGuard } from './helpers/auth.guard';
import { SecretComponent } from './secret/secret.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
  },
  {
    path: 'privado',
    component: SecretComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new',
    component: NewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'skills/edit/:id',
    component: EditskillComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'trabajo/edit/:id',
    component: EdittrabajoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'proyecto/edit/:id',
    component: EditproyectoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'about/edit/:id',
    component: EditaboutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'idiomas/edit/:id',
    component: EditidiomaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'skills/new',
    component: NewskillComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'educacion/edit/:id',
    component: EditeducacionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'trabajo/new',
    component: NewtrabajoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'proyecto/new',
    component: NewproyectoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'educacion/new',
    component: NeweducacionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'idiomas/new',
    component: NewidiomaComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
