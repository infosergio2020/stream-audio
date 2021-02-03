const { Router } = require("express");
const router = Router();
const { getTrack, uploadTrack, listTrack } = require('../controllers/tracks.controller')

router.get('/list', listTrack);
router.get('/:trackID', getTrack);
router.post('/', uploadTrack);

module.exports = router;