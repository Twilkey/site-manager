const webpack = require('webpack');

module.exports = {
    webpack: {
      configure: {
        resolve: {
          fallback: {
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            buffer: require.resolve("buffer/"),
            assert: require.resolve("assert"),
            constants: require.resolve("constants-browserify"),
          },
        },
        plugins: [
            new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
            }),
        ],
        experiments: {
          topLevelAwait: true,
        },
      },
    },
  };