// server/api/user-agent.ts
export default defineEventHandler((event) => {
  const userAgent =
    event.node.req.headers['user-agent'] ||
    event.node.req.headers['x-forwarded-user-agent'] ||
    ''

  console.log('User-Agent:', userAgent) // server-side debug

  return { userAgent }
})
