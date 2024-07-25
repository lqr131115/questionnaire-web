import path from "path";

const pathResolve = (pathUrl: string) => path.join(__dirname, pathUrl);

export default {
  devServer: {
    proxy: {
      "/mock": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/api": {
        target: "http://qnapi.echo.ah.cn:80",
        changeOrigin: true,
      },
    },
  },
  webpack: {
    alias: {
      "@": pathResolve("src"),
    },
    module: {
      rules: [
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "babel-loader",
            },
            {
              loader: "@svgr/webpack",
              options: {
                babel: false,
                icon: true,
              },
            },
          ],
        },
      ],
    },
  },
};
