'use strict';

const { Router }= require('express');
const router = Router();

const { getTexts, getText, createText, updateText, deleteText  } = require('../controllers/texts.controller');

router.route('/texts')
    .get(getTexts)
    .post(createText);

router.route('/texts/:id')
    .get(getText)
    .put(updateText)
    .delete(deleteText);

module.exports = router