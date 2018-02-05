// Module dependencies
import Carrier from '../models/carrier';

export const getCarriers = (req, res, next) => {
  Carrier.find({})
  .then(carriers => res.status(200).json(carriers))
  .catch(err => next(err));
}

export const getCarrier = (req, res, next) => {
  Carrier.findById(req.params.id)
  .then(carrier => res.status(200).json(carrier))
  .catch(err => next(err));
}

export const createCarrier = (req, res, next) => {
  Carrier.create(req.body)
  .then(carrier => res.status(201).json(carrier))
  .catch(err => next(err));
}

export const updateCarrier = (req, res, next) => {
  Carrier.findOneAndUpdate(
    {
    _id: req.params.id
    },
    {
      $set: { ...req.body }
    },
    { new: true }
  )
  .then(carrier => res.status(200).json(carrier))
  .catch(err => next(err));
}

export const deleteCarrier = (req, res, next) => {
  Carrier.deleteOne({ _id: req.params.id })
  .then(deleted => res.status(200).json(deleted))
  .catch(err => next(err));
}