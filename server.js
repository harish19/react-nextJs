const next = require('next')
const Hapi = require('hapi')
const { pathWrapper, defaultHandlerWrapper, nextHandlerWrapper } = require('./next-wrapper')

const port = parseInt(process.env.PORT, 10) || 3010
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const server = new Hapi.Server({
  port
})

app
.prepare()
.then(async () => {
  server.route({
    method: 'GET',
    path: '/a',
    handler: pathWrapper(app, '/a')
  })

  try {
    await server.start()
    console.log(`> Ready on http://localhost:${port}`)
  } catch (error) {
    console.log('Error starting server')
    console.log(error)
  }
})