/* tslint:disable */
/* eslint-disable */
import { DetallebaucherWithRelations } from './detallebaucher-with-relations';

/**
 * (tsType: BaucherWithRelations, schemaOptions: { includeRelations: true })
 */
export interface BaucherWithRelations {
  EmpleadoId: string;
  Fecha: string;
  detallebauchers?: Array<DetallebaucherWithRelations>;
  id?: string;
}
