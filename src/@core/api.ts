const HOST = 'http://localhost:3000'

const get = async (url: string) => {
  const site = process.env.SITE_TARGET

  try {
    const response = await fetch(`${HOST}/api/${site}/${url}`)
    const data = await response.json()

    console.log(data)
    return data
  } catch (error) {
    console.error(error)
  }
}

export default { get }
