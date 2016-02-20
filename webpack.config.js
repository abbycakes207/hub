var path = require("path");
module.exports = {
    entry: [
        path.resolve(__dirname, "app/main.jsx")
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    "babel"
                ]
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    plugins: []
};
