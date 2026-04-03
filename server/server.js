import express from 'express'
import 'dotenv'
import toolsRouter from './routes/tools.js'

const app = express()

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

app.use('/tools', toolsRouter)

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">AI Tools Hub</h1>')
})

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})