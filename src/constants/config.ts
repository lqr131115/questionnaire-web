type EnvMode = "development" | "production" | string;

type RequestBaseUrl = {
  mockUrl: string;
  baseUrl: string;
  [key: string]: string;
};

type RequestBaseUrlConfig = {
  [P in EnvMode]: RequestBaseUrl;
};

export const env = process.env.NODE_ENV;

const requestBaseUrlConfig: RequestBaseUrlConfig = {
  development: {
    mockUrl: "/mock",
    baseUrl: "/mock",
  },
  production: {
    mockUrl: "/qn",
    baseUrl: "/qn",
  },
};

export const baseURLConfig = {
  mock: true,
  env,
  ...requestBaseUrlConfig[env],
};
