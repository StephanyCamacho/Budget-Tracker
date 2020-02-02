const Budget = require("../model/budget.js")

module.exports = function (app) {

    app.get("/api/budget", function (req, res) {
        Budget.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });

    app.post("/api/budget", function (req, res) {
        Budget.create(req.body)
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });
}