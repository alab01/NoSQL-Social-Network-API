const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thoughtController.js');

  // /api/users
router.route('/').get(getThoughts).post(createThought);

// /api/users/:userId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router
.route('/:thoughtId/reaction')
.post(addReaction);

router
.route('/:thoughtId/reaction/reactionId')
.post(removeReaction);


module.exports = router;