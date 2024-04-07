import path from "path";

const pathResolve = (pathUrl: string) => path.join(__dirname, pathUrl);

export default {
  devServer: {
    proxy: {
      "/mock": "http://localhost:3001",
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
