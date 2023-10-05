import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Analisis, UMindAPI } from '../../api/umind.api';
import { buildRequest, localImageToBase64, transformarImagen } from '../../util/images';
import { uploadImage } from '../../api/cloudinary';

export type State = {
  resultados: Analisis[],
  errores: string,
  analizar: {
    loading: boolean;
    error: string;
  };
}

const analizarImagen = createAsyncThunk(
    'predict',
    async (imagen: string, { rejectWithValue, dispatch }) => {
      try {
        //const base64Images = await transformarImagen(imagen);
        const base64Images = await localImageToBase64([imagen]);
        
        await dispatch(sliceActions.analizar([]));
        //console.log(base64Images)

        //console.log("payload")
        //console.log(JSON.stringify(payload))

        const cloudinary = await uploadImage(base64Images[0])

        const payload = {
          imagen: cloudinary.url
        }
        console.log(payload)
        const analisis = await UMindAPI.analizarImagenAPI(payload);
        await dispatch(sliceActions.analizar(analisis));
        return analisis;
      } catch (error) {
        console.log(`Ocurrio un error al procesar la imagen: ${error.message}` );
        //return error;
        //rejectWithValue(error);
        throw error;
      }
    },
  );

  const initialState: State = {
    resultados: [],
    errores: "",
    analizar: {
      loading: false,
      error: '',
    }
  }

export const umindAppSlice = createSlice({
  name: 'umind',
  initialState,
  reducers: {
    analizar: (state, action) => {
      state.resultados = action.payload;
    }
  },
  extraReducers(builder){
    builder.addCase(analizarImagen.pending, state => {
      state.analizar.loading = true;
      console.log('analisis pending');
    });
    builder.addCase(analizarImagen.fulfilled, (state, action) => {
      state.analizar = {
        ...initialState.analizar,
      };
      console.log('analisis fullfilled');
    });
    builder.addCase(analizarImagen.rejected, (state, action) => {
      state.analizar.loading = false;
      console.log('analisis rejected');
      if (action.payload) {
        state.analizar.error =
          (action.payload as any).message || 'Ocurrio un error insperado';
          console.log(state)
      }else{
        state.analizar.error ='Ocurrio un error insperado'
      }
    });
  }
})

const reducer = umindAppSlice.reducer;
const sliceActions = umindAppSlice.actions;

export const umindSlice = {
  actions: {
    ...sliceActions,
    analizarImagen
  },
  reducer,
};