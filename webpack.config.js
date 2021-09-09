const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "productlistMfe",
    publicPath: "/productlistmfe"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "productlistmfeapp",
        filename: "productlistmfe/remoteEntry.js",
        exposes: {
            './ProductListMFE': './/src/app/product-list/product-list.module.ts',
        },       
        
        // shared: share({
        //   "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        //   "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        //   "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        //   "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        // })

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true }, 
          "@angular/common": { singleton: true, strictVersion: true }, 
          "@angular/common/http": { singleton: true, strictVersion: true }, 
          "@angular/router": { singleton: true, strictVersion: true },
          "karthikhellomodule": { singleton: true },
          "shared-mfe-lib": { singleton: true }
        })
        
    }),
    sharedMappings.getPlugin()
  ]
};
