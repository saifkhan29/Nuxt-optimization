export default defineEventHandler((event) => {
  // Log all headers for debugging
  console.log('All headers:', event.node.req.headers);
  const userAgent =
    event.node.req.headers['user-agent'] ||
    event.node.req.headers['x-forwarded-user-agent'] ||
    '';

  return { userAgent };
}); 