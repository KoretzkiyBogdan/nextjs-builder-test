import React, { useEffect, useState } from 'react'
import api from '@core/api'
import CommentsBlock from '@core/components/CommentsBlock'

const Comments: React.FC = () => {
  const [comments, setComments] = useState([])
  useEffect(() => {
    const getComments = async () => {
      const result = await api.get('comments')
      setComments(result)
    }
    getComments()
  }, [])

  return (
    <div>
      <p>Comments: </p>
      <CommentsBlock comments={comments}></CommentsBlock>
    </div>
  )
}

export default Comments
