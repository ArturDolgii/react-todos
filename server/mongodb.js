const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const mongoClient = new MongoClient("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

class MongoDBService {
    constructor() {
        this.db = null;
    }

    connect() {
        mongoClient.connect((err, client) => {
            if (err) {
                return console.log(err);
            }

            this.db = client.db("todosdb");
            console.log("db connected")
        });
    }

    getTodos() {
        return this.db.collection("todos");
    }

    async find(params = {}) {
        const data = await this.getTodos().find(params).toArray();
        console.log("found");
        return data;
    }

    async insertOne(params) {
        const lastRecord = await this.getTodos().find().sort({ id: -1 }).limit(1).toArray();

        params.id = lastRecord.length ? ++lastRecord[0].id : 1;
        params.completed = false;

        await this.getTodos().insertOne(params);
        console.log("added");
        return params;
    }

    async updateOne(id, params) {
        await this.getTodos().updateOne({ id }, { $set: params });
        console.log("edited");
    }

    async deleteOne(id) {
        const data = await this.getTodos().deleteOne({id});
        console.log("deleted one");
        return data;
    }

    async deleteMany(params) {
        const data = await this.getTodos().deleteMany(params);
        console.log("deleted many");
        return data;
    }
}

module.exports = MongoDBService;
