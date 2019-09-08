const express = require("express");
const MongoDBService = require("./mongodb");

const app = express();
const dbService = new MongoDBService();

dbService.connect();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/todos", async (req, res) => {
    let params = {};
    let completedMap = {
        "ACTIVE": false,
        "COMPLETED": true
    };

    if (req.query.filter === "ACTIVE" || req.query.filter === "COMPLETED") {
        params = { completed: completedMap[ req.query.filter ] }
    }

    const data = await dbService.find(params);

    res.send(data);
});

app.post("/todos/:id", async (req, res) => {
    await dbService.updateOne(+req.params.id, req.body);
    res.sendStatus(200);
});

app.put("/todos", async (req, res) => {
    await dbService.insertOne(req.body);
    res.sendStatus(200);
});

app.delete("/todos", async (req, res) => {
    if (req.query.filter === "COMPLETED") {
        await dbService.deleteMany({ completed: true });
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

app.delete("/todos/:id", async (req, res) => {
    await dbService.deleteOne(+req.params.id);
    res.sendStatus(200);
});

app.listen(3001, function () {
    console.log("server started");
});
