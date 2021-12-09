    const knex = require("../database/connection");

    const findAll = async (req, res) => {
    const lojas = await knex("lojas");
    res.json(lojas);
};

    const create = async (req, res) => {
    const result = await knex("lojas").insert(req.body);
    res.json(result);
};

    const update = async (req, res) => {
    const result = await knex("lojas")
        .where({ id: req.params.id })
        .update(req.body);
    res.json(result);
};

    const destroy = async (req, res) => {
    const result = await knex("lojas")
        .where({ id: req.params.id })
        .del();
    res.json(result);
};

module.exports = { findAll, create, update, destroy };