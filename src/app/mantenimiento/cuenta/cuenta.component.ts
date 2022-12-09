import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Cuenta } from 'src/app/api/models';
import { CuentaControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent {
    cuenta: Cuenta []=[]

    constructor(
      private cuentaService:CuentaControllerService,
      private messageService:NzMessageService

    ){}
}
