module.exports = {
  async rewrites () {
    return [
      {
        source: '/',
        destination: '/home/index.html'
      }
    ]
  }
}
