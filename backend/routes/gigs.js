import express from 'express';
import Gig from '../models/gig.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { title, description, price, postedBy } = req.body;
    const newGig = new Gig({ title, description, price, postedBy });
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



export default router;
