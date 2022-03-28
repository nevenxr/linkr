const express = require("express");
const fs = require("fs");

/**
 * @param {express.Application} app 
 */
module.exports = (app) => {
    const files = fs.readdirSync(require.main?.path + "/routes")
        .filter(ext => ext.endsWith(".js"));

    for (const file of files) {
        const route = require(`../routes/${file}`);
        const path = (file === "index.js" ? "/" : `/${file.replace(".js", "")}`);

        if (route) {
            app.use(path, route);
        };
    };
};