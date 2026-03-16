const express = require('express');
const router  = express.Router();
const { protect, adminOnly } = require('../middleware/auth');
const {
  getAllWorkers,
  getWorkerById,
  createWorker,
  updateWorker,
  deleteWorker,
} = require('../controllers/workerController');

router.get('/',       getAllWorkers);
router.get('/:id',    getWorkerById);
router.post('/',      createWorker);
router.put('/:id',    protect, updateWorker);
router.delete('/:id', protect, adminOnly, deleteWorker);

module.exports = router;