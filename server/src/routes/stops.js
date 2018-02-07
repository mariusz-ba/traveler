// Module dependencies
import express from 'express';
import authenticate from '../utils/authenticate';

// Controllers
import * as Stops from '../controllers/stopsController';

// Router
const router = express.Router();
router
.get    ('/'    , Stops.getStops)
.get    ('/:id' , Stops.getStop)
.post   ('/'    , authenticate, Stops.createStop)
.put    ('/:id' , authenticate, Stops.updateStop)
.delete ('/:id' , authenticate, Stops.deleteStop);

export default router;