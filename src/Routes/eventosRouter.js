import { Router } from "express";

const router = Router()

import {eventos,criarEventos, editEvento, deleteEvetos} from '../Controllers/eventosController.js'

router.get('/agenda', eventos)
router.post("/criar", criarEventos)
router.put("/editar", editEvento)
router.delete('/cancelar',deleteEvetos )


export default router;