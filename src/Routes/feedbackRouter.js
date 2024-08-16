import { Router } from "express";

const router = Router()

import {feedback, getFeedbacks} from '../Controllers/feedbackController.js'

router.get("/feedback", getFeedbacks)
router.post("/feedback", feedback)

export default router;