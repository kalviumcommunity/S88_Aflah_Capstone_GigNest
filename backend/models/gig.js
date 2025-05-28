// models/gig.js
import mongoose from 'mongoose';

const gigSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  postedBy: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Gig = mongoose.model('Gig', gigSchema);

export default Gig;
