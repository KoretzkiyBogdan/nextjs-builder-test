import React from 'react'
import styles from './CommentsBlock.module.css'

type CommentType = {
  body: string
  name: string
  email: string
  id: number
}

interface IComments {
  comments: CommentType[]
  containerClassName?: string
}

const CommentsBlock: React.FC<IComments> = ({
  comments,
  containerClassName,
}) => {
  return (
    <div className={containerClassName || styles.block}>
      {comments.map(({ id, email, body }) => {
        return (
          <div key={id} className={styles.container}>
            <div className={styles.email}>{email}</div>
            <div className={styles.text}>{body}</div>
          </div>
        )
      })}
    </div>
  )
}

export default CommentsBlock
