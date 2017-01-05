var config = {
    devServer: {
        host: '127.0.0.1',
        port: 3580
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_component)/,
            loader: "babel",
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            exclude: /(node_modules|bower_component)/,
            loaders: ["style-loader", "css-loader"]
        }]
    },
    devtool: "source-map"
};

var rxjs = Object.assign({},
    config, {
        entry: {
            dist_rxjs_ui_events: ["./src/js/rxjs/dist_rxjs_ui_events"]
        },
        output: {
            path: './webpack_transpiled/rxjs',
            filename: "[name].js"
        }
    });


/**
 
 rxjs,
 
 */

module.exports = [
    rxjs
];
