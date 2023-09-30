import express from 'express';
import AdressController from '../controllers/AdressController';
import { validateCreateAddress, validateDeleteAddress } from '../middlewares/validation'; // Importe middlewares de validação

const router = express.Router();

router.post('/addresses', validateCreateAddress, AdressController.create);

router.post('/addresses/delete', validateDeleteAddress, AdressController.delete);

router.get('/addresses', AdressController.listAdress);

export default router;
