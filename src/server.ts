import 'dotenv/config'
import { fastify } from 'fastify'

import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscriptionRoute } from './routes/create-transcription'

const app = fastify()

const port = Number(process.env.DATABASE_PORT)

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`HTTP server running on port ${port} 🚀`)
  })
