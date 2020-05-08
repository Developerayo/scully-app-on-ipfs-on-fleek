exports.config = {
  projectRoot: "./src",
  projectName: "scully-app-on-ipfs-on-fleek",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};