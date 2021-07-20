const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ]
  },

  assetPrefix: isProd ? 'https://cdn.statically.io/gh/muhrizqiardi/muhrizqiardi.github.io/github-pages/' : '',
}
