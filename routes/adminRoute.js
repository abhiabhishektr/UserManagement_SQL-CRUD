const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Define admin routes
router.get('/admin', adminController.getAllAdmins);
router.get('/admin/:id', adminController.getAdminById);
router.post('/admin', adminController.createAdmin);
router.put('/admin/:id', adminController.updateAdmin);
router.delete('/admin/:id', adminController.deleteAdmin);

module.exports = router;
                                                                                     