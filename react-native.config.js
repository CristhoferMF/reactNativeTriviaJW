module.exports = {
  // config for a library is scoped under "dependency" key
  project: {
    platforms: {
      ios: {},
      android: {}, // projects are grouped into "platforms"
    }
  },
  assets: ['./src/assets/fonts/'], // stays the same
  // hooks are considered anti-pattern, please avoid them
  //   hooks: {
  //     prelink: './path-to-a-prelink-hook',
  //   },
}