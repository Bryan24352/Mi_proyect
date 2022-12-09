/* tslint:disable */
/* eslint-disable */
import { BaucherWithRelations } from './baucher-with-relations';
import { CuentaWithRelations } from './cuenta-with-relations';

/**
 * (tsType: DetallebaucherWithRelations, schemaOptions: { includeRelations: true })
 */
export interface DetallebaucherWithRelations {
  BaucherId?: string;
  CuentaId: string;
  Valor: string;
  baucher?: BaucherWithRelations;
  baucherId?: string;
  cuenta?: CuentaWithRelations;
  cuentaId?: string;
}
