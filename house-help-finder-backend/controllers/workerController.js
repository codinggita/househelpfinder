const Worker = require('../models/Worker');

// GET /api/workers
const getAllWorkers = async (req, res) => {
  try {
    const { serviceType, city, experience, availability, page = 1, limit = 12 } = req.query;

    const filter = { isActive: true };
    if (serviceType)  filter.serviceType  = serviceType.toLowerCase();
    if (experience)   filter.experience   = experience;
    if (availability) filter.availability = availability;
    if (city) {
      filter.$or = [
        { city: { $regex: city, $options: 'i' } },
        { area: { $regex: city, $options: 'i' } },
      ];
    }

    const skip    = (parseInt(page) - 1) * parseInt(limit);
    const total   = await Worker.countDocuments(filter);
    const workers = await Worker.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    res.json({ success: true, total, page: parseInt(page), pages: Math.ceil(total / parseInt(limit)), workers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/workers/:id
const getWorkerById = async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.id);
    if (!worker || !worker.isActive) {
      return res.status(404).json({ error: 'Worker not found' });
    }
    res.json({ success: true, worker });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/workers
const createWorker = async (req, res) => {
  try {
    const { name, phone, serviceType, experience, city, area, expectedSalary, availability, about } = req.body;
    const worker = await Worker.create({
      name, phone, serviceType, experience, city, area,
      expectedSalary: Number(expectedSalary), availability, about,
    });
    res.status(201).json({ success: true, worker });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ error: messages.join(', ') });
    }
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/workers/:id
const updateWorker = async (req, res) => {
  try {
    const worker = await Worker.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    if (!worker) return res.status(404).json({ error: 'Worker not found' });
    res.json({ success: true, worker });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /api/workers/:id (soft delete)
const deleteWorker = async (req, res) => {
  try {
    const worker = await Worker.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    if (!worker) return res.status(404).json({ error: 'Worker not found' });
    res.json({ success: true, message: 'Worker removed successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllWorkers, getWorkerById, createWorker, updateWorker, deleteWorker };