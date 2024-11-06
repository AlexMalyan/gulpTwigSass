const { distDir } = require('./vars');
const del = require('del');


/**
 * Deletes the contents of the dist directory.
 *
 * @function clean
 * @returns {Promise<void>}
 */
module.exports = async function clean() {
  return del.sync([distDir], { force: true });
};
