const router = require("express").Router();

const Workers = require("../models/workers-model");

// GET - all workers
router.get("/", (req, res) => {
    Workers.get()
    .then(workers => res.status(200).json(workers))
    .catch(err => res.status(500).json({ error: "The server failed to retrieve all workers from the database." }))
});

// GET - worker by ID
router.get("/:id", (req, res) => {
    res.send("boogers")
});

// POST - add a worker 
router.post("/", (req, res) => {

});

// PUT - update a worker
router.put("/", (req, res) => {

});

// DELETE - remove a worker
router.delete("/", (req, res) => {

});

module.exports = router;