/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Empleado, 'codigoEmpleado'>, schemaOptions: { title: 'NewEmpleado', exclude: [ 'codigoEmpleado' ] })
 */
export interface NewEmpleado {
  Correo: string;
  nombre: string;
  sueldo: number;
}
