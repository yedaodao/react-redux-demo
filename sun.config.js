var path = require('path');

module.exports = {
    webpack: {
        entry: {
            app: ['./app/index.js']
        },
        output: {
            path: path.join(__dirname, 'build'),
            publicPath: ''
        }
    },
    pageMap: [
        {
            chunks: ['app'],
            template: './index.html',
            filename: 'index.html'
        }
    ]
};