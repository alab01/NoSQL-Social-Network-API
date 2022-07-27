const db = require("../config/connection");
const { Users, Reaction, Thought } = require("../models");

const usersSeed = require("./users.json");

db.once("open", async() => {
    try {
        await db.dropDatabase();

        await Users.create(usersSeed);
        console.log("users seed done");

        process.exit(0);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
})