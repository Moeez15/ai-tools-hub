import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import ToolController from '../controllers/tools.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router();

router.get('/', ToolController.getGifts)

router.get('/:toolId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/tool.html'))
})

export default router

