
const sourceFolder = "src";

module.exports = {
  distDir: 'dist',
  // twig
  twigData: {},
  twigDataDir: sourceFolder + '/data',
  twigBasePath: sourceFolder + '/twig/',
  twigSrc: [sourceFolder + '/twig/pages/**/*.twig'],
  twigWatch: [sourceFolder + '/data/**/*', sourceFolder + '/twig/**/*'],
  // sass
  sassSrc: ['src/scss/style.scss', 'src/scss/style.ltr.scss', 'src/scss/style.rtl.scss'],
  sassWatch: ['src/scss/**/*'],
  // vendor
  vendorSrc: ['src/vendor/**/*'],
  vendorWatch: ['src/vendor/**/*'],
  // svg
  svgSrc: ['src/svg/**/*.svg'],
  svgWatch: ['src/svg/**/*.svg'],
  svgFileName: 'sprite.svg',
  // images
  imagesSrc: ['src/images/**/*'],
  imagesWatch: ['src/images/**/*'],
  // js
  jsSrc: ['src/js/**/*'],
  jsWatch: ['src/js/**/*'],
  // fonts
  fontsSrc: ['src/fonts/**/*.ttf'],
  fontsWatch: ['src/fonts/**/*'],
}