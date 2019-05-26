'use strict'

const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

const port = 3000

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('Ouvindo na http://localhost:' + port)
})