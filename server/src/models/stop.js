/**
 * Module dependencies
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Stop schema
 */

const StopSchema = new Schema({
  name: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true }
});

/**
 * Statics
 */

StopSchema.statics = {

};

const Stop = mongoose.model('Stop', StopSchema);

module.exports = Stop;