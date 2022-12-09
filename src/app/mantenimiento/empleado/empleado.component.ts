import { Component, OnInit } from '@angular/core';
import { id_ID } from 'ng-zorro-antd/i18n';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Empleado } from 'src/app/api/models';
import { EmpleadoControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
    empleado:Empleado[]=[]

    constructor(
      private empleadoService:EmpleadoControllerService,
      private messageService:NzMessageService

    ){}

    ngOnInit(): void{
      this.empleadoService.find().subscribe(data=>this.empleado=data)
    }
    confirm(id:string):void{
      this.empleadoService.deleteById({id}).subscribe(()=>{
        this.empleado=this.empleado.filter(x=>x.codigoEmpleado !== 'codigoEmpleado')
        this.messageService.success('Registro Empleado Eliminado!')
      })
    }

    cancel():void{
      this.messageService.info('Registro Empleado sigue Activo!')
    }
}
