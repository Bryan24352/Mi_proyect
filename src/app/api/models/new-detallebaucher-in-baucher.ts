/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Detallebaucher, 'BaucherId'>, 'baucherId'>, schemaOptions: { title: 'NewDetallebaucherInBaucher', exclude: [ 'BaucherId' ], optional: [ 'baucherId' ] })
 */
export interface NewDetallebaucherInBaucher {
  CuentaId: string;
  Valor: string;
  baucherId?: string;
  cuentaId?: string;
}
