const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  css:{
    loaderOptions:{
      sass: {
        prepenData: `import "@/assets/styles/styles.scss`
      }
    }
  }
};
