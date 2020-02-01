const next = require('next')
const Koa = require('koa')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const PORT = 8000

app.prepare().then(() => {
  const server = new Koa()
  server.use((ctx, next) => {
    console.log(ctx.path)
    next()
  })
  server.use(ctx => {
    handle(ctx.req, ctx.res)
  })
  server.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`)
  })
})