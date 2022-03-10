import express from "express";
import { getUser, createUser, editPassword, deleteUser, getAllUser } from "../controllers/userController.js";

const router = express.Router();

router.post('/getuser', getUser);
router.post('/create', createUser);
router.post('/editpassword', editPassword);
router.post('/delete', deleteUser);
router.get('/getall', getAllUser);


export default router;