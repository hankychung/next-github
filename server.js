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
    // 绕过Koa的内置响应处理，如果要写入原始res对象而不是让Koa处理响应，设置respond为false，否则页面只会显示OK，而不会显示next渲染的内容
    ctx.respond = false
  })
  server.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`)
  })
})