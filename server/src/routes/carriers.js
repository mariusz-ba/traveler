// Module dependencies
import express from 'express';
import authenticate from '../utils/authenticate';

// Controllers
import * as Carriers from '../controllers/carriersController';

// Router
const router = express.Router();
router
.get    ('/'    , Carriers.getCarriers)
.get    ('/:id' , Carriers.getCarrier)
.post   ('/'    , authenticate, Carriers.createCarrier)
.put    ('/:id' , authenticate, Carriers.updateCarrier)
.delete ('/:id' , authenticate, Carriers.deleteCarrier);

export default router;