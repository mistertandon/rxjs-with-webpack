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

var rxjsUiEvents = Object.assign({},
    config, {
        entry: {
            dist_rxjs_1_ui_events: ["./src/js/rxjs/rxjs_1_ui_events"]
        },
        output: {
            path: './webpack_transpiled/rxjs',
            filename: "[name].js"
        }
    });

var rxjsWithArray = Object.assign({},
    config, {
        entry: {
            dist_rxjs_02_with_array: ["./src/js/rxjs/rxjs_02_with_array"]
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
    rxjsUiEvents,
rxjsWithArray
];
