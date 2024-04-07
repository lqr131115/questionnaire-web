export default {
  devServer: {
    proxy: {
      "/mock": "http://localhost:3001",
    },
  },
  webpack: {
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
