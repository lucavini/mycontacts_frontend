const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, 'src/Components'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
      '~Services': path.resolve(__dirname, 'src/Shared/Services'),
      '~Assets': path.resolve(__dirname, 'src/assets'),
      '~Utils': path.resolve(__dirname, 'src/utils'),
    },
  },
};