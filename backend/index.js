const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const express = require("express");

app.prepare().then(() => {
    const app = express();
    
    require("./utils/mongodb");
    require("./utils/middleware")(app);
    require("./utils/routes")(app);

    app.get("*", async (req, res) => {
        return await handle(req, res);
    });

    app.listen(process.env.PORT || 3000, () => {
        console.log("Link shortener is started")
    });
});