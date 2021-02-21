const defaultHeaders = {
  'Content-Type': 'application/json',
};

type RequestOptions = {
  [key: string]: unknown,
  headers?: Record<string, unknown>
}

interface IRequest {
  url: string,
  options?: RequestOptions
}

export const requests = {
  get: ({
    url,
    options = {},
  }: IRequest): Promise<Response> => fetch(url, {
    ...options,
    method: 'get',
    headers: {
      ...defaultHeaders,
    },
    credentials: 'include',
  }),
  post: ({
    url,
    options = {},
  }: IRequest): Promise<Response> => fetch(url, {
    ...options,
    method: 'post',
    headers: {
      ...defaultHeaders,
      ...options?.headers || {},
    },
    credentials: 'include',
  }),
  put: ({
    url,
    options = {},
  }: IRequest): Promise<Response> => fetch(url, {
    ...options,
    method: 'put',
    headers: {
      ...defaultHeaders,
      ...options?.headers || {},
    },
    credentials: 'include',
  }),
  delete: ({
    url,
    options = {},
  }: IRequest): Promise<Response> => fetch(url, {
    ...options,
    method: 'delete',
    headers: {
      ...defaultHeaders,
      ...options?.headers || {},
    },
    credentials: 'include',
  }),
};

export type APIMethods = 'get' | 'post' | 'put' | 'delete';
export interface IFireRequest {
  method: APIMethods,
  url: string,
  options?: Record<string, unknown>,
  parseJSON?: boolean,
  sleepDuration?: number
}

export type APIError = {
  message: string
};

export type ParsedJSON = {
  errors?: APIError[],
  user?: unknown,
  exp?: number
}

type RequestReturn = {
  res?: Response,
  json?: ParsedJSON,
  err?: Error
}
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fireRequest = async ({
  method,
  url,
  options,
  parseJSON = true,
  sleepDuration,
}: IFireRequest): Promise<RequestReturn> => {
  const lowercasedMethod = method && method.toLowerCase();

  if (requests[lowercasedMethod] && url) {
    if (sleepDuration) await sleep(sleepDuration);

    try {
      const res = await requests[lowercasedMethod]({ url, options });

      if (parseJSON) {
        const json = await res.json();
        return {
          res,
          json,
        };
      }
      return {
        res,
      };
    } catch (err) {
      return {
        err,
      };
    }
  }

  return {};
};
