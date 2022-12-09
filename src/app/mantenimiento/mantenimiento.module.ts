import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { EmpleadoComponent } from './empleado/empleado.component';
import { BaucherComponent } from './baucher/baucher.component';
import { DetallebaucherComponent } from './detallebaucher/detallebaucher.component';
import { CuentaComponent } from './cuenta/cuenta.component';

// Imports de Ng-Zorro

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [
    EmpleadoComponent,
    BaucherComponent,
    DetallebaucherComponent,
    CuentaComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzMessageModule
  ]
})
export class MantenimientoModule { }
