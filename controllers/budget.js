const express = require('express');
const router = express.Router();
const Bills = require('../models/bills.js');
const Expenses = require('../models/expenses.js');

router.get('/', (req, res) =>{
    Bills.find({}, (err, foundBills) => {
        res.json(foundBills);
    })
});

router.delete('/:id', (req, res) => {
    Bills.findByIdAndRemove(req.params.id, (err, deletedBills) => {
        res.json(deletedBills);
    })
})

router.post('/', (req, res) => {
    Bills.create(req.body, (err, createdBills) => {
        res.json(createdBlog);
    });
})

router.put('/:id', (req, res) => {
    Bills.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBill) => {
        res.json(updatedBill)
    })
})

module.exports = router;