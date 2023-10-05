import { authenticatedApi, postHeaders } from './common';

export const authenticatedPost = async (
    url: string,
    payload: any = {},
    args: RequestInit = {}
  ) =>
    await authenticatedApi(
      url,
      {
        method: 'POST',
        headers: postHeaders,
        body: payload,
        ...args,
      },
    );