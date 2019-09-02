import express from 'express'
import nextapp from './config/nextapp'
import PagesRouter from './config/router'
import dbconn from './config/db'
import { ConnectionError } from 'vscode-jsonrpc';

// Set up our express app
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 8080
const app = express()
app.use('/', PagesRouter)

async function main() {
    try {
        await nextapp.prepare()
        await dbconn.connect()
        
        app.listen(port, host, () => {
            console.log(`Server listening on ${host}:${port}`)
        })

        await connection.end()
        
    } catch (err) {
        console.error(err)
    }
}

main()