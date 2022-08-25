const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // publicPath: '', // <-- has to set this even if build target is lib.
  transpileDependencies: true
})
