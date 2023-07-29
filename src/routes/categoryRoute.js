const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router
	.route('/')
	.get(categoryController.getAllCategory)
	.post(categoryController.createCategory);

router
	.route('/:id')
	.get(categoryController.getCategoryById)
	.put(categoryController.updateCategory)
	.delete(categoryController.deleteCategory);

module.exports = router;
