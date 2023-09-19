import { getEndpoints } from './config';

export interface AuthenticatedApiOptions {
  checkTokenExpiration?: ResponseHandler;
  token?: string;
}

export interface ErrorResponse {
  response: Response;
  url: string;
}

export type DeleteResponse = {
  operation: boolean;
};

export type ResponseHandler = (response: Response) => Promise<Response>;
export const getHeaders = {
  Accept: 'application/json',
};
export const postHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
};

const formatResponse = (response: Response) => {
  const contentType = response.headers.get('content-type');
  if (!contentType || contentType.indexOf('application/json') >= 0) {
    return response.json().catch(() => {
      // TODO:
    });
  }

  return response;
};

export const authenticatedApi = async (
  url: string,
  args: RequestInit = {}
) => {
  return api(url, args).catch((err: ErrorResponse) => {
    console.log(err)
    console.log('error during calling', JSON.stringify(err));
    return err.response.json().then(errResponse => {
      throw errResponse;
    });
  });
};

export const api = (
  url: string,
  args: RequestInit = {}
) => {
  let absoluteUrl = url;
  if (!url.startsWith('/')) {
    absoluteUrl = `/${url}`;
  }

  const finalUrl = `${getEndpoints().apiHostUrl}${absoluteUrl}`;
  return fetch(finalUrl, args)
    .catch(r => {
      throw r;
    })
    .then(checkStatus)
    .then(formatResponse)
    .catch(error => {
      console.log(
        `Hubo un problema con la petición Fetch a ${finalUrl}. Error: ${error.message}`,
      );
      throw error;
    });
};

const checkStatus = (response: Response) => {
  if (response.ok) {
    return response;
  }

  const error = new Error(response.statusText);
  (error as any).response = response;
  throw error;
};
