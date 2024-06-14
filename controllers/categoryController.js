const Category = require('../models/categoryModel');

const categoryController = {
    async index(req, res, next) {
       let category;
       try {
           const { id } = req.params;
           category = await Category.findById(
               id,
               { title: 1, _id: 0 } // Only select the title field
           );
           if (!category) {
               return res.status(404).json({ error: "Category not found." });
           }
       } catch (error) {
           return res.status(500).json({ error: "Server error.", serverError: error });
       }
       res.status(200).json(category);
    },

    async store(req, res, next) {
        let cat;
        try {
            const { title, description } = req.body;
            cat = await Category.create({
                 title,
                 description,
                  thumbnail: "uploads/category/thumbnail" + req.file.filename,
                 });
        } catch (error) {
            return res.status(500).json({ error: "Server error.", serverError: error });
        }
        res.status(201).json(cat);
    },

    async delete(req, res, next) {
        let cat;
        try {
            const { id } = req.body;
            cat = await Category.findByIdAndDelete(id);
            if (!cat) {
                return res.status(404).json({ error: "Category not found." });
            }
        } catch (error) {
            return res.status(500).json({ error: "Server error.", serverError: error });
        }
        res.status(200).json(cat);
    },

    async update(req, res, next) {
        let cat;
        try {
            const { id } = req.params;
            const { title, description } = req.body;
            cat = await Category.findByIdAndUpdate(
                id,
                { title, description },
                { new: true }
            );
            if (!cat) {
                return res.status(404).json({ error: "Category not found." });
            }
        } catch (error) {
            return res.status(500).json({ error: "Server error.", serverError: error });
        }
        res.status(200).json(cat);
    }
};

module.exports = categoryController;
