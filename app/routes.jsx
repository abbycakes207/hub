// routes

var React = require("react");
var ReactDOMServer = require("react-dom/server");

var Home = require("./com/Home");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index", {
            home: ReactDOMServer.renderToString(<Home />)
        });
    });
};
