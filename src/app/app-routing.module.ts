import { ListarRecursoComponent } from './components/listar-recurso/listar-recurso.component';
import { CrearRecursoComponent } from './components/crear-recurso/crear-recurso.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EliminarRecursoComponent } from './components/eliminar-recurso/eliminar-recurso.component';
import { EditRecursoComponent } from './components/edit-recurso/edit-recurso.component';
import { AsignacionComponent } from './components/asignacion/asignacion.component';
import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados/listar-empleados.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { MapaComponent } from './mapa/mapa/mapa.component';
import { Error404Component } from './components/error404/error404/error404.component';
import { SigninComponent } from './components/signin/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', component: InicioComponent, data: { breadcrumb: 'Inicio'}},
  { path: 'inicio', component: InicioComponent, data: { breadcrumb: 'Inicio'}},
  { path: 'mapa', component: MapaComponent, data: { breadcrumb: 'Mapa del Sitio'}},
  {path: 'listar-empleados', component: ListarEmpleadosComponent, data: { breadcrumb: 'Empleados'}},
  {path: 'registro', component: RegistroComponent, data: { breadcrumb: 'Empleados > Registrar Empleado'}},
  {path: 'editar-empleado/:id', component: RegistroComponent, data: { breadcrumb: 'Empleados > Editar Empleados'}},
  { path: 'listar-recurso', component: ListarRecursoComponent, data: { breadcrumb: 'Recursos'}},
  { path: 'crear-recurso', component: CrearRecursoComponent, data: { breadcrumb: 'Recursos > Crear Recursos'}},
  { path: 'editar-recurso/:id', component: CrearRecursoComponent, data: { breadcrumb: 'Recursos > Editar Recursos'}},
  { path: 'eliminar-recurso/:id', component: EliminarRecursoComponent, data: { breadcrumb: 'Recursos > Eliminar Recursos'}},
  { path: 'edit-recurso/:id', component: EditRecursoComponent, data: { breadcrumb: 'Recursos > Editar Recursos'}},
  {path: 'asignacion', component: AsignacionComponent, data: { breadcrumb: 'Asignacion'}},
  {path: 'error404', component: Error404Component},
  {path: 'signin', component: SigninComponent, data: { breadcrumb: 'Sig Nin'}},
  {path: 'signup', component: SignupComponent, data: { breadcrumb: 'Sign Up'}},
  {path: 'login', component: LoginComponent, data: { breadcrumb: 'Login'}},
  { path: '**', redirectTo: 'error404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
