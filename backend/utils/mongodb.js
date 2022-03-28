const mongoose = require("mongoose");

const connection = {
    ready: false
};

mongoose.connection.once("open", () => {
    connection.ready = true; 
    console.log("Successfully connected to mongodb");
});

mongoose.connection.on("close", () => {
    console.log("Couldn't establish connection with mongodb");
});

const url = process.env.Mongo;
if (!connection.readyState && url) {
    (async () => await mongoose.connect(url, {
        keepAlive: true,
        connectTimeoutMS: 0
    }))();
};