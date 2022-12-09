/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Detallebaucher, 'BaucherId'>, 'cuentaId'>, schemaOptions: { title: 'NewDetallebaucherInCuenta', exclude: [ 'BaucherId' ], optional: [ 'cuentaId' ] })
 */
export interface NewDetallebaucherInCuenta {
  CuentaId: string;
  Valor: string;
  baucherId?: string;
  cuentaId?: string;
}
