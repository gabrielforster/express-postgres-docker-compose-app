import { Router } from "express"

import * as User from "./user.controller"

const router = Router()

router.get("/", User.getAllUsers)
router.get("/:id", User.getUser)
router.post("/", User.createUser)
router.patch("/:id", User.updateUser)
router.delete(":/id", User.deleteUser)

export default router