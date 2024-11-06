
const { series, parallel } = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

// console.log(tasks.copyResources);

// exports.fonts = tasks.copyResources.copyFonts
// exports.svg = tasks.copyResources.copySvg

// // exports.test = tasks.test
// exports.clean = tasks.clean;
// // exports.copyImages = tasks.copyImages
// exports.scripts = tasks.scripts
// exports.twig = tasks.twig
// exports.styles = tasks.styles
// // exports.browserSync = tasks.browsersync
exports.watch = tasks.watcher

exports.default = parallel(
  tasks.copyResources.copyResources,
  tasks.styles,
  tasks.scripts,
  tasks.twig,
  tasks.watcher
)
// exports.build = series(
//   'clean',
//   'copyImages',
//   'scripts',
//   'twig',
//   'styles'
// )