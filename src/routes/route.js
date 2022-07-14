const express = require("express");
const router = express.Router();

const { createCard, getCard } = require("../controllers/cardController.js");


// Business Card API's
router.post('/businessCard/new', createCard)

router.get('/businessCard/:cardId', getCard)

// router.put('/businessCard/new', updateCard)

// router.delete('/businessCard/new', deleteCard)


module.exports = router;