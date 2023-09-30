import express from 'express';
import UserController from '../controllers/UserController';
import { validateCreateUser, validateUpdateUser, validateDeleteUser, validateFindUser } from '../middlewares/validation'; // Importe middlewares de validação

const router = express.Router();

router.post('/users', validateCreateUser, UserController.create);

router.post('/users/update', validateUpdateUser, UserController.update);

router.post('/users/delete', validateDeleteUser, UserController.delete);

router.get('/users/edit/:id', validateFindUser, UserController.editUser);

router.get('/users/:id', validateFindUser, UserController.findOne);

router.get('/users', UserController.listUsers);

export default router;
