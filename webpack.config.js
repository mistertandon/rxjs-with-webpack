var config = {
    devServer: {
        host: '127.0.0.1',
        port: 3468
    },
    module: {
        preLoaders: [
            {test: /\.js$/, exclude: /(node_modules|bower_component)/, loader: "jshint-loader"}
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_component)/,
                loader: "babel",
                query: {
                    presets: ['es2015']
                }
            },
            {test: /\.css$/, exclude: /(node_modules|bower_component)/, loaders: ["style-loader", "css-loader"]}
        ]
    },
    devtool: "source-map"
};

var rxjs = Object.assign(
        {},
        config,
        {
            entry: {
                dist_rxjs_1: ["./src/js/rxjs/src_promise"]
            },
            output: {
                path: './webpack_transpiled/bluebird_promise',
                filename: "[name].js"
            }
        });


/**
 
 rxjs,
 
 */

module.exports = [
    rxjs
];
