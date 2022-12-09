import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaucherComponent } from './baucher/baucher.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { DetallebaucherComponent } from './detallebaucher/detallebaucher.component';
import { EmpleadoComponent } from './empleado/empleado.component';

const routes: Routes = [
  {path:'',
  children:[
    {path:'baucher',component:BaucherComponent},
    {path:'cuenta',component:CuentaComponent},
    {path:'detallebaucher',component:DetallebaucherComponent},
    {path:'empleado',component:EmpleadoComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
