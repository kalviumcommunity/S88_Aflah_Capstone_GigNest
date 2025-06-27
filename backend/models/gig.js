// models/gig.js
import mongoose from 'mongoose';

const gigSchema = new mongoose.Schema({
  title: String, //title : Logo Design
  description: String, //description : need a logo for our brand
  price: Number, //1000rs
  postedBy: String, 
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Gig = mongoose.model('Gig', gigSchema);

export default Gig;
