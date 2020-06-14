const postcss = require('postcss');

module.exports = postcss.plugin('postcss-final-newline', function () {
  return function (root) {
    root.raws.after = '\n';
  };
});
