const db = require("../database/db-config");

module.exports = {
    get,
    getById,
    add,
    update,
    remove
}

function get() {
    return db('workers');
};

function getById(id) {
    return null;
};

function add(worker){
    return null;
};

function update(id, worker){
    return null;
};

function remove(id){
    return null;
};