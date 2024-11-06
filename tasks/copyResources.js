const { parallel, src, dest } = require('gulp');
const vars = require('./vars');

const fs = require('fs');

const imagemin = require('gulp-imagemin'),
  webp = require('gulp-webp');

const svgmin = require('gulp-svgmin'),
  svgSprite = require("gulp-svg-sprite");

const ttfToWoff = require('gulp-ttf-to-woff');

const newer = require('gulp-newer');



const copySvg = () => {
  return src(vars.svgSrc)
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      svgSprite({
        shape: {
          dimension: {
            // Set maximum dimensions
            maxWidth: 32,
            maxHeight: 32,
          },
        },
        mode: {
          symbol: {
            sprite: "../" + vars.svgFileName,
            example: true,
          },
        },
      })
    )
    .pipe(dest(vars.distDir + "/svg/"));
}

/**
 * Copies and converts all .ttf files from ./src/fonts/ to .woff in ./public/fonts/.
 * @return {PassThrough} The stream of converted files.
 */
const copyFonts = () => {
  return src(vars.fontsSrc)
    .pipe(newer(vars.distDir + "/fonts/"))
    .pipe(ttfToWoff())
    .pipe(dest(vars.distDir + "/fonts/"));
}


const copyImages = () => {
  const folderPath = "./src/images"
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath)
  }
  return (
    src(vars.imagesSrc)
      .pipe(src(vars.imagesSrc))
      .pipe(newer(vars.distDir + "/images/"))
      .pipe(webp())
      .pipe(src(vars.imagesSrc))
      .pipe(newer(vars.distDir + "/images/"))
      .pipe(imagemin())
      .pipe(dest(vars.distDir + "/images/"))
  );

}

const copyResources = async () => {
  copySvg(),
    copyFonts(),
    copyImages()
};

module.exports = { copySvg, copyFonts, copyImages, copyResources }
