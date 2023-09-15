import { fastify } from 'fastify'

import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideo } from './routes/upload-video'

const app = fastify()

const port = 3333

app.register(getAllPromptsRoute)
app.register(uploadVideo)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(`HTTP server running on port ${port} 🚀`)
  })
