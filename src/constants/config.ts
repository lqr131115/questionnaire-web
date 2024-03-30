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

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

const requestBaseUrlConfig: RequestBaseUrlConfig = {
  development: {
    mockUrl: "/mock",
    baseUrl: "/qn",
  },
  production: {
    mockUrl: "/qn",
    baseUrl: "/qn",
  },
};

export const baseURLConfig = {
  mock: false,
  env,
  ...requestBaseUrlConfig[env],
};
