const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');


//browserSync.reload();
module.exports = styles = () => {
  return src('./src/scss/style.scss')
    .pipe(concat("style.min.css"))
    .pipe(sass({ outputStyle: "compressed" }).on('error', sass.logError))
    .pipe(dest('./dist/css')
    );
}