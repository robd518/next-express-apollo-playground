import express from 'express'
import nextapp from './nextapp'

const ExRouter = express.Router()

ExRouter.get('/test', (req, res, next) => {
    nextapp.render(req, res, '/test')
})

export default ExRouter