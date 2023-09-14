import { fastify } from 'fastify'

const app = fastify()

const port = 3333

app.get('/', () => {
  return 'd3v'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log(`HTTP server running on port ${port} 🚀`)
})