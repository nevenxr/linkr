const express = require("express");
const cors = require("cors");

/**
 * @param {express.Application} app
 */
module.exports = (app) => {
    app.use(express.json());
    app.use(cors({ origin: "*"}));
};