import { Router } from "express";

const router = Router()

import {palestrantes, criarPalestrantes, palestranteId} from '../Controllers/palestrantesController.js'

router.get("/palestrantes",palestrantes)
router.post("/palestrantes", criarPalestrantes)
router.get("/palestrantes/:id", palestranteId)

export default router;


