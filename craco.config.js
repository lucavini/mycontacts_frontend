const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, 'src/App/Components'),
      '@Pages': path.resolve(__dirname, 'src/App/pages'),
      '~Services': path.resolve(__dirname, 'src/Shared/Services'),
      '~Styles': path.resolve(__dirname, 'src/Shared/styles'),
      '~Assets': path.resolve(__dirname, 'src/App/assets'),
      '~Utils': path.resolve(__dirname, 'src/Shared/utils'),
    },
  },
};