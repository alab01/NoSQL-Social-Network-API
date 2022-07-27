const db = require("../config/connection");
const { Users, Reaction, Thought } = require("../models");

const usersSeed = require("./users.json");
const thoughtsSeed = require("./thoughts.json");
const reactionsSeed = require("./reactions.json");

console.log(reactionsSeed);
console.log(Reaction.obj);

db.once("open", async() => {
    try {
        await db.dropDatabase();

        await Users.create(usersSeed);
        console.log("users seed done");

        await Thought.create(thoughtsSeed);
        console.log("thoughts seed done");

        process.exit(0);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
})