import { Router } from "express";

const router = Router()

import {inscreverParticipantes} from '../Controllers/inscreverParticipantes.js'

router.post("/inscrever", inscreverParticipantes)


export default router;