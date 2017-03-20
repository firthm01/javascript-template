module.exports = {
    entry: __dirname + "/src/entry-module.js",
    output: {
        path: __dirname+'/dist',
        filename: "transpiled-output-filename.js", 
        libraryTarget: "var",
        library: "LibraryClassName"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.js$/, include:["src/"], loader: "babel-loader"},
            { test: /\.js$/, exclude:["node_modules/"], loader: "babel-loader"}
        ]
    }
};
