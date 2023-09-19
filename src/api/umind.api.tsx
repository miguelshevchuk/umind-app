import { authenticatedPost } from "./config/calls";

export interface Analisis {
    Descripcion: string;
    Indicador: string;
  }

  type Imagen = {
    imagen: string;
  };

const analizarImagenAPI = async (imagen: Imagen): Promise<Analisis[]> => {
    return authenticatedPost(`/predict`, imagen);
  };

const analizarImagenAPI2 = async (imagen: Imagen)=> {
    return [{descripcion: "asdasd", indicador: "holas"}, {descripcion: "asdasd", indicador: "holas2"}];
};

export const UMindAPI = {
    analizarImagenAPI,
    analizarImagenAPI2,
  };
  