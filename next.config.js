const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          publicPath: `/_next/static/videos/`, // Ruta donde se guardarán los archivos de video en la carpeta "public"
          outputPath: `${isServer ? '../' : ''}static/videos/`, // Ruta donde se accederán los archivos de video en la carpeta "public" (dependiendo del entorno de servidor o cliente)
          esModule: false,
        },
      },
    });

    return config;
  },
};
