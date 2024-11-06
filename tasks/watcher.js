const { watch } = require('gulp');

const styles = require('./styles');
const scripts = require('./scripts');
const twig = require('./twig');
const browserSync = require('browser-sync').create();

// const watchFiles = () => {
//   watch('./src/scss/**/*', styles);
//   watch('./src/scripts/**/*', scripts);
//   watch('./src/twig/**/*', twig);
//   watch('./src/images/**/*', browserSync.reload);
//   watch('./src/fonts/**/*', browserSync.reload);
// };

const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: './dist/',
    },
    port: 8080,
    ui: { port: 8081 },
    open: true,
  });
  watch('./src/scss/**/*', styles).on('change', browserSync.reload);
  watch('./src/js/**/*', scripts).on('change', browserSync.reload);
  watch('./src/twig/**/*', twig).on('change', browserSync.reload);
  watch('./src/images/**/*', browserSync.reload);
  watch('./src/fonts/**/*', browserSync.reload);
}

module.exports = browsersync
