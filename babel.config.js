module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@theme': './src/theme',
            '@storage': './src/storage',
            '@assets': './src/assets',
            '@routes': './src/routes',
          },
        },
      ],
    ],
  }
}
