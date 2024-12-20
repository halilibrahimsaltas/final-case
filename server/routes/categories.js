const {Category} = require('../models/category');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get(`/`, async (req, res) => {
    const categoryList = await Category.find();

    try {
        if(!categoryList) {
            res.status(500).json({success: false});
        } else {
            res.send(categoryList);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, error: error.message});
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID format." });
    }

    try {
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ error: "Category not found." });
        }
        res.json(category);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error." });
    }
});


router.post(`/create`, async (req, res) => {
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color
    });

    category = await category.save();

    try {
        if(!category) {
            res.status(500).json({success: false});
        } else {
            res.send(category);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, error: error.message});
    }
});

router.put('/:id', async (req, res) => {
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color
        },
        { new: true }
    );

    try {
        if(!category) {
            res.status(500).json({success: false});
        } else {
            res.send(category);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, error: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id);

    try {
        if(category) {
            return res.status(200).json({success: true, message: 'The category is deleted!'});
        } else {
            return res.status(404).json({success: false, message: 'Category not found!'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, error: error.message});
    }
});
module.exports = router;

