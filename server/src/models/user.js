/**
 * Module dependencies
 */

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { saltRounds } from '../../config.js';
const Schema = mongoose.Schema;

/**
 * User Schema
 */

const UserSchema = new Schema({
  username: { type: 'String', required: true, index: { unique: true }},
  password: { type: 'String', required: true },
  email: { type: 'String', required: true, index: { unique: true }},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, saltRounds, (error, hash) => {
    if(error) return next(error);

    this.password = hash;
    next();
  })
})

/**
 * Statics
 */

UserSchema.statics = {

};

const User = mongoose.model('User', UserSchema);

module.exports = User;