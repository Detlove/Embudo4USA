module.exports = {
  async rewrites () {
    return [
      {
        source: '/registrarme-ahora',
        destination: '/home/index.html'
      }
    ]
  },
  async redirects () {
    return [
      {
        source: '/',
        destination: '/registrarme-ahora',
        permanent: true
      }
    ]
  }
}
