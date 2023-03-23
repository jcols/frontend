import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './helpers/token.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecretComponent } from './secret/secret.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { EditComponent } from './components/edit/edit.component';
import { NewComponent } from './components/new/new.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { EditskillComponent } from './editskill/editskill.component';
import { NewskillComponent } from './newskill/newskill.component';
import { EditaboutComponent } from './editabout/editabout.component';
import { EditidiomaComponent } from './editidioma/editidioma.component';
import { NewidiomaComponent } from './newidioma/newidioma.component';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { EdittrabajoComponent } from './edittrabajo/edittrabajo.component';
import { NewtrabajoComponent } from './newtrabajo/newtrabajo.component';
import { EducacionComponent } from './educacion/educacion.component';
import { EditeducacionComponent } from './editeducacion/editeducacion.component';
import { NeweducacionComponent } from './neweducacion/neweducacion.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { EditproyectoComponent } from './editproyecto/editproyecto.component';
import { NewproyectoComponent } from './newproyecto/newproyecto.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [AppComponent, SecretComponent, LoginPageComponent, RegisterPageComponent, EditComponent, NewComponent, AboutComponent, SkillsComponent, IdiomasComponent, EditskillComponent, NewskillComponent, EditaboutComponent, EditidiomaComponent, NewidiomaComponent, TrabajoComponent, EdittrabajoComponent, NewtrabajoComponent, EducacionComponent, EditeducacionComponent, NeweducacionComponent, ProyectoComponent, EditproyectoComponent, NewproyectoComponent, PrincipalComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
