import express from 'express'
import nextapp from './nextapp'
import { parse } from 'url'

const PagesRouter = express.Router()

PagesRouter.get('*', (req, res, next) => {
    const url = parse(req.url, true)
    console.log(url.pathname)
    console.log(url.query)
    nextapp.render(req, res, url.pathname || '', url.query)
})

export default PagesRouter