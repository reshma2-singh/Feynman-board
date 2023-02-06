import express from "express"
import { createTopic, getTopic } from '../controllers/topicController.js'
const router = express.Router()
router.route('/').get(getTopic).post(createTopic)
export default router