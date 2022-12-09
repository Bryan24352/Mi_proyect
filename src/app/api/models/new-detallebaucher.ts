/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Detallebaucher, 'BaucherId'>, schemaOptions: { title: 'NewDetallebaucher', exclude: [ 'BaucherId' ] })
 */
export interface NewDetallebaucher {
  CuentaId: string;
  Valor: string;
  baucherId?: string;
  cuentaId?: string;
}
