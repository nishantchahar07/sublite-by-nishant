const express = require('express');
const categoryController = require('../controllers/categoryController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const router = express.Router();

// PUBLIC
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);

// PROTECTED (Admin only)
router.post('/', auth, admin, categoryController.createCategory);
router.put('/:id', auth, admin, categoryController.updateCategory);
router.delete('/:id', auth, admin, categoryController.deleteCategory);

module.exports = router;