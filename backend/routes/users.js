/* eslint-disable object-curly-newline */
const router = require('express').Router();
const { celebrate } = require('celebrate');

const {
  getUsers,
  getCurrUser,
  updateUser,
  updateAvatar,
} = require('../controllers/users');
const {
  updateUserSchema,
  updateAvatarSchema,
  getCurrUserSchema,
} = require('../utils/validations');

// route definitions
router.get('/', getUsers);
router.get('/me', getCurrUser);
router.get('/:userId', celebrate(getCurrUserSchema), getCurrUser);
router.patch('/me', celebrate(updateUserSchema), updateUser);
router.patch('/me/avatar', celebrate(updateAvatarSchema), updateAvatar);

module.exports = router;
