module.exports = {
    target: "web",
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_module|brower_component)/,
                loader: "babel",
                query: {
                    presets: ["es2015"],
                    cacheDirectory: true
                },
                babelrc: false
            }
        ]
    },
    entry: {
        "01_new_promise": "./src/01_new_promise.js"
    },
    output: {
        filename: "[name].js",
        path: __dirname+"/webpack_transpiled"
    }
};