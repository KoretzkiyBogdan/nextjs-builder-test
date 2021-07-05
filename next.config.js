const path = require('path')

module.exports = () => {
  const SITE_TARGET = process.env.SITE_TARGET
  const pathToSite = path.join('/sites', SITE_TARGET)
  const env = { SITE_TARGET }

  async function rewrites() {
    return [
      {
        source: '/',
        destination: pathToSite,
      },
      {
        source: '/:path*',
        destination: `${pathToSite}/:path*`,
      },
    ]
  }
  return { rewrites, env, reactStrictMode: true }
}
