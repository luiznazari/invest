module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '^/Prod': {
        target: 'https://l1i8gyk48c.execute-api.us-east-1.amazonaws.com/',
        ws: true,
        changeOrigin: true,
        headers: {
          'X-Ivs-Session': process.env.SESSION_TOKEN,
        },
      },
    },
  },
}
