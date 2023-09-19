import { authenticatedApi, postHeaders } from './common';

export const authenticatedPost = (
    url: string,
    payload: any = {},
    args: RequestInit = {}
  ) =>
    authenticatedApi(
      url,
      {
        method: 'POST',
        headers: postHeaders,
        body: JSON.stringify(payload),
        ...args,
      },
    );