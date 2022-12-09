/* tslint:disable */
/* eslint-disable */
import { CuentaWithRelations } from './cuenta-with-relations';

/**
 * (tsType: EmpleadoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface EmpleadoWithRelations {
  Correo: string;
  codigoEmpleado: string;
  cuentas?: Array<CuentaWithRelations>;
  nombre: string;
  sueldo: number;
}
