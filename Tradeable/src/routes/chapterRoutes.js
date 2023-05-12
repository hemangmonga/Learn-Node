const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middlewares/authMiddleware');
const { chapters, chapterId, quiz } = require('../controllers/chapterController');

router.get('/', requireAuth, chapters);

router.get('/:chapterId', requireAuth,  chapterId);

router.get('/:chapterId/quiz', requireAuth,  quiz);

module.exports = router;
