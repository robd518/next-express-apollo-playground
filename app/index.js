import express from 'express'
import nextapp from './config/nextapp'
import PagesRouter from './config/router'

// Set up our express app
const app = express()
app.use('/', PagesRouter)
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 8080

async function main() {
    try {
        await nextapp.prepare()
        
        app.listen(port, host, () => {
            console.log(`Server listening on ${host}:${port}`)
        })

    } catch (err) {
        console.error(err)
    }
}

main()