import { authenticatedPost } from "./config/calls";

export interface Analisis {
    Descripcion: string;
    Indicador: string;
  }

  type Imagen = {
    imagen: string;
  };

const analizarImagenAPI = async (imagen: Imagen): Promise<Analisis[]> => {
    return await authenticatedPost(`/predict/url`, imagen);
  };

const analizarImagenAPI2 = async (imagen: Imagen)=> {
    return [{descripcion: "asdasd", indicador: "holas"}, {descripcion: "asdasd", indicador: "holas2"}];
};

const analizarImagenAPI3 = async (imagen: string)=> {
  return await authenticatedPost(`/predict`, imagen);
};

export const UMindAPI = {
    analizarImagenAPI,
    analizarImagenAPI2,
    analizarImagenAPI3
  };
  