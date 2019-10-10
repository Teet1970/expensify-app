module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-flow',
    ],
    plugins: [
        'babel-plugin-styled-components',
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-async-to-generator",
        "@babel/plugin-transform-object-assign"
    ]
  }