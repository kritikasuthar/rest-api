const express = require('express');
const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/category/thumbnail');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)
    );
    },
  });
  
  const upload = multer({ storage: storage });

// Category Routes
router.post("/category",upload.single("thumbnail"),categoryController.store);
router.post("/category", categoryController.store);
router.get("/category/:id", categoryController.index); // Add :id param to fetch by ID
router.delete("/category/:id", categoryController.delete);
router.put("/category/:id", categoryController.update);

// Product Routes
router.post("/product", productController.store);
router.get("/product", productController.index);

module.exports = router;
