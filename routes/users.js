const express = require('express');
const router = express.Router();

const UsersCtrl = require('../controllers/users');


router.get('', UsersCtrl.getUsers);
router.post('/create', UsersCtrl.createUser);
router.post('/update', UsersCtrl.updateUser);
router.post('/delete', UsersCtrl.deleteUser);
router.get('/userDetails', UsersCtrl.getUserById);

module.exports = router;
