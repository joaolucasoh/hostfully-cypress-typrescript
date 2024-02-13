const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
    const options = {
    // Webpack configuration
    };
    on('file:preprocessor', webpackPreprocessor(options));
};