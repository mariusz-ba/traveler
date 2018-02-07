// Module dependencies
import express from 'express';
import User from '../models/user';

// Router
const router = express.Router();
router
.post('/', (req, res, next) => {
  // Creating new user
  const { username, password, email } = req.body;

  User.findOne({
    $or: [
      { username: username },
      { email: email }
    ]
  })
  .then(user => {
    console.log('user', user);
    if(user) {
      const usr = (user.username === username ? { username: 'User with this username already exists' } : null);
      const ema = (user.email === email ? { email: 'User with this email already exists' } : null);
      res.status(405).json({
        errors: { ...usr, ...ema }
      })
    } else {
      User.create({
        username,
        email,
        password
      })
      .then(user => res.status(201).json(user))
    }
  })
  .catch(err => next(err));
})

export default router;