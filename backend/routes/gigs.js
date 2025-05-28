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

router.get('/gigs', async (req, res) => {
  try {
    const gigs = await Gig.find();
    res.status(200).json(gigs);   
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



router.put('/gigs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, postedBy } = req.body;

    const updatedGig = await Gig.findByIdAndUpdate(
      id,
      { title, description, price, postedBy },
      { new: true, runValidators: true }
    );

    if (!updatedGig) {
      return res.status(404).json({ message: 'Gig not found' });
    }

    res.status(200).json(updatedGig);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



export default router;
