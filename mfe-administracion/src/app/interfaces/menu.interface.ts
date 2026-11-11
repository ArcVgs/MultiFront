export interface Proceso {
  idProceso: string;
  descProceso: string;
  imgProceso: string | null;
  desUrlProceso: string;
  indOrder: string | null;
}

export interface ModuloMenu {
  idModulo: string;
  descModulo: string;
  imgModulo: string | null;
  desUrlModulo: string;
  indOrder: string | null;
  procesos: Proceso[];
}
