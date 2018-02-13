/**
 * Module dependencies
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * CarrierSchema
 */

const CarrierSchema = new Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  endpoints: [{
    name: { type: String, required: true },
    stop: { type: Schema.Types.ObjectId, required: true, ref: 'Stop'}
  }],
  timetable: [{
    day: { type: Number, required: true, default: 1 }, // 0 - Sunday, 6 - Saturday
    from: { type: Number, required: true, default: 0 },
    to: { type: Number, required: true, default: 1 },
    departureTime: { type: Number, required: true }
  }],
  stops: [{ type: Schema.Types.ObjectId, ref: 'Stop' }]
});

/**
 * Statics
 */

CarrierSchema.statics = {

};

const Carrier = mongoose.model('Carrier', CarrierSchema);

module.exports = Carrier;

