import mongoose from 'mongoose';

const gigSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Gig = mongoose.model('Gig', gigSchema);
export default Gig;
