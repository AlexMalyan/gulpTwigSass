const { src, dest } = require('gulp');
const fs = require('fs');

const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const newer = require('gulp-newer');

module.exports = copyImages = () => {
  const folderPath = "./src/images"
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath)
  }
  return (
    src(["./src/images/**/*", "!./src/images/svg/**/*"])
      .pipe(src("./src/images/**/*"))
      .pipe(newer("./dist/images/"))
      .pipe(webp())
      .pipe(src("./src/images/**/*"))
      .pipe(newer("./dist/images/"))
      .pipe(imagemin())
      .pipe(dest("./dist/images/"))
  );

}