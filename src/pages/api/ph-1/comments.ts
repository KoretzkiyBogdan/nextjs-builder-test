import fetch from 'node-fetch'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

type Error = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1/comments?_limit=10'
    )
    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}
