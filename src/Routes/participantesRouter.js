import { Router } from "express";

const router = Router()

import {participantes, criarParticipantes} from '../Controllers/participantesController.js'

router.get("/",participantes)
router.post("/registrar", criarParticipantes)

export default router;


