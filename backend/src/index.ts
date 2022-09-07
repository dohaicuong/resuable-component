import fastify, { FastifyRequest } from 'fastify'
import cors from '@fastify/cors'

const app = fastify({ logger: true })

app.register(cors, {})

app
  .listen({ host: '0.0.0.0', port: 3000 })
  .then(url => console.log(url))
  .catch(error => {
    app.log.error(error)
    process.exit(1)
  })

process.on('SIGTERM', async () => {
  console.log('Closing http server.')
  await app.close()
  console.log('Http server closed.')
})

type GetOverviewRequest = FastifyRequest<{
  Params: {
    from_date: string
    to_date: string
  }
}>
app.get('/overview/:from_date/:to_date', (request: GetOverviewRequest, reply) => {
  // const { from_date, to_date } = request.params
  return {
    customer: {
      active: 10,
      total: 15,
      trend: 'UP',
      trend_value: 4,
    },
    learner: {
      active: 10,
      total: 15,
      trend: 'DOWN',
      trend_value: 4,
    },
    enrollment: {
      value: 15,
      trend: 'UP',
      trend_value: 4,
    },
    completion_rate: {
      value: 60,
      trend: 'DOWN',
      trend_value: 4,
    },
  }
})
