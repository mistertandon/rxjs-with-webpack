Note: There is two way to load CSS file into xxx.js extension file using
"STYLE & CSS. " loaders.
First : 

========================================================================
    module: {
        loaders: [
            { test: /\.css$/, exclude: /(node_modules|bower_component)/, loader:"style!css!"},
        ]
    },
            
            OR
    
    module: {
        loaders: [
            { test: /\.css$/, exclude: /(node_modules|bower_component)/, loaders:["style-loader", "css-loader"]},
        ]
    },
            
            OR

    module: {
        loaders: [
            { test: /\.css$/, exclude: /(node_modules|bower_component)/, loaders:["style", "css"]},
        ]
    },
========================================================================
