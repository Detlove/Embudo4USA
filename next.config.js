module.exports = {
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
