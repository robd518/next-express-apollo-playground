require('dotenv').config({ path: '../.env' })
import 'reflect-metadata'
import express from 'express'
import nextapp from './nextapp'
import { createConnection } from 'typeorm'
import apolloserver from './apolloserver'
import cors from 'cors'
import PagesRouter from './router'
import dbconfig from './dbconfig'

// Set up our express app
const host = process.env.HOST || '0.0.0.0'
const port = parseInt(process.env.PORT || '8080', 10)
const app = express()
app.use(cors())
app.use('/', PagesRouter)

async function main() {
    try {
        await nextapp.prepare()
        await createConnection(dbconfig)

        apolloserver.applyMiddleware({ app, path: '/graphql' })

        app.listen(port, host, () => {
            console.log(`Server listening on ${host}:${port}`)
        })

    } catch (err) {
        console.error(err)
    }
}

main()