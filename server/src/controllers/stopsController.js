// Module dependencies
import Stop from '../models/stop';
import Carrier from '../models/carrier';

export const getStops = (req, res, next) => {
  // req.query contains filter object
  // {
  //   carrier: id - return only stops used by this carrier
  // }
  if(req.query.carrier) {
    Carrier.findById(req.query.carrier, { stops: 1 })
      .populate({ path: 'stops', select: ['name', 'lat', 'lng'] })
      .then(carrier => {
        if(carrier)
          res.status(200).json(carrier.stops);
        else
          res.status(404).json({ error: 'No such stops' });
      })
      .catch(err => next(err));
  } else {
    Stop.find({})
      .then(stops => res.status(200).json(stops))
      .catch(err => next(err));
  }
}

export const getStop = (req, res, next) => {
  Stop.findById(req.params.id)
    .then(stop => {
      if(stop)
        res.status(200).json(stop);
      else
        res.status(404).json({ error: 'Stop not found' });
    })
    .catch(err => next(err));
}

export const createStop = (req, res, next) => {
  Stop.create(req.body)
    .then(stop => res.status(201).json(stop))
    .catch(err => next(err));
}

export const updateStop = (req, res, next) => {
  Stop.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body
    },
    { new: true }
  )
  .then(stop => {
    if(stop)
      res.status(200).json(stop);
    else
      res.status(404).json({ error: 'Cannot update non existing post' });
  })
  .catch(err => next(err));
}

export const deleteStop = (req, res, next) => {
  Stop.deleteOne({ _id: req.params.id })
    .then(deleted => res.status(200).json(deleted))
    .catch(err => next(err));
}