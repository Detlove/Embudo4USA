module.exports = {
  async rewrites () {
    return [
      {
        source: '/registrarme-ahora',
        destination: '/home/index.html'
      }
    ]
  }
}
