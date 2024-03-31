export default {
  devServer: {
    proxy: {
      "/mock": "http://localhost:3001",
    },
  },
};
