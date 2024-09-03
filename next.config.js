const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(mp4)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'videos/'
                }
            }
        });

        return config;
    }
};
