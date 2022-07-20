import express from "express";
import userController from "../../controllers/user.controller.js";

const router = express.Router();

router.get("/", userController.getUsers);

router.post("/", userController.create);

router.get("/:id", userController.get);

router.put("/:id", userController.update);

router.delete("/:id", userController.deLete);

export default router;
