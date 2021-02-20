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

export interface IFireRequest {
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  options?: Record<string, unknown>,
  parseJSON?: boolean
}

type ParsedJSON = {
  errors?: string[],
  user?: unknown,
  exp?: number
}

type RequestReturn = {
  res?: Response,
  json?: ParsedJSON,
  err?: Error
}

export const fireRequest = async ({
  method,
  url,
  options,
  parseJSON = true,
}: IFireRequest): Promise<RequestReturn> => {
  const lowercasedMethod = method && method.toLowerCase();

  if (requests[lowercasedMethod] && url) {
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
