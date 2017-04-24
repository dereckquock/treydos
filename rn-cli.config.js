'use strict'

let path = require('path')
let blacklist = require('./node_modules/react-native/packager/blacklist')

let config = {
  getProjectRoots() {
    return getRoots()
  },

  getBlacklistRE() {
    return blacklist([
    ])
  },

  getAssetExts() {
    return ['obj', 'mtl']
  },

  getPlatforms() {
    return ['vr']
  },

  getProvidesModuleNodeModules() {
    return ['react-native', 'react-vr']
  },
}

function getRoots() {
  let root = process.env.REACT_NATIVE_APP_ROOT
  if (root) {
    return [path.resolve(root)]
  }
  return [path.resolve(__dirname)]
}

module.exports = config