/* eslint-disable object-curly-newline */
const router = require('express').Router();
const { celebrate } = require('celebrate');

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');
const {
  getCreateCardSchema,
  getDeleteCardSchema,
  getToggleLikeCard,
} = require('../utils/validations');

router.get('/', getCards);
router.post('/', celebrate(getCreateCardSchema), createCard);
router.delete('/:cardId', celebrate(getDeleteCardSchema), deleteCard);
router.put('/:cardId/likes', celebrate(getToggleLikeCard), likeCard);
router.delete('/:cardId/likes', celebrate(getToggleLikeCard), dislikeCard);

module.exports = router;
