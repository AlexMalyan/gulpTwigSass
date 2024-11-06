const { src, dest } = require('gulp');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const newer = require('gulp-newer');
// const browserSync = require('browser-sync');

module.exports = scripts = () => {
  return src('src/js/**/*.js')
    .pipe(concat("scripts.min.js"))
    .pipe(uglify())
    .pipe(dest('./dist/js'));
}