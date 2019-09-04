import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const nextapp = next({ dir: './app', dev })

export default nextapp