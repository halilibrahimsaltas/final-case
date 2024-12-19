const {Category} = require('../models/category');
const express = require('express');
const router = express.Router();

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

//http:\\localhost\4000\api\users