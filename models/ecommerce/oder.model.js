import mongoose from 'mongoose';

const oderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const oderSchema = new mongoose.Schema(
  {
    oderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    oderItems: {
      type: [oderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DEL'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export const Oder = mongoose.model('Oder', oderSchema);
