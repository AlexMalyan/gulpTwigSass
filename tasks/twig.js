
const { src, dest } = require('gulp');
const data = require('gulp-data');
const twig = require('gulp-twig');

const { twigSrc, twigDataDir } = require('./vars');
const path = require('path');
const fs = require('fs');

module.exports = function twigs() {
    return src(twigSrc)
        .pipe(data(function (file) {
            const result = {};
            const files = fs.readdirSync(twigDataDir);

            for (let file of files) {
                result[path.basename(file, '.json')] = JSON.parse(fs.readFileSync(twigDataDir + '/' + file).toString())
            }
            return result
        }))
        .pipe(twig())
        .pipe(dest('./dist/'))

}
