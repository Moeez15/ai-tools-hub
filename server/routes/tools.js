import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import toolData from '../data/tools.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(toolData)
})

router.get('/:toolId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/tool.html'))
})

export default router

