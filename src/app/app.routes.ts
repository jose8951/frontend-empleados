import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio';
import { DatosComponent } from './componentes/datos/datos';
import { ListadoComponent } from './componentes/listado/listado';

export const routes: Routes = [
 {path:'inicio',component:InicioComponent},
 {path:'datos',component:DatosComponent},
 {path:'listado',component:ListadoComponent},
 {path:'',redirectTo:'/inicio',pathMatch:'full'}

];
