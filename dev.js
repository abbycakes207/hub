// dev
var devPort = 3006;
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config.js");
var entry = config.entry.pop();
config.entry.push("webpack-dev-server/client");
config.entry.push("webpack/hot/only-dev-server");
config.entry.push(entry);
config.module.loaders[0].loaders.push("react-hot");
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.NoErrorsPlugin());

// start express
require("./index.js");

new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    proxy: {
        "*": "http://localhost:3005"
    }
}).listen(devPort, function (err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log("(dev) listening on port: " + devPort);
    }
});
