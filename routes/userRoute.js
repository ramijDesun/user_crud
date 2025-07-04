import express from 'express';
import { create, deleteUser, getAll, getOne, update } from '../controller/userController.js';

const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);
route.post("/update/:id", update);
// route.put("/update/:id", update);
// route.delete("/delete/:id", deleteUser);
route.get("/delete/:id", deleteUser);

export default route;