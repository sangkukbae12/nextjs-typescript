import React from 'react'
import { Post } from '../types'

type Props = {
  post: Post
  deletePost: (id: number) => void
}

const PostCard: React.FC<Props> = ({ post, deletePost }) => {
  return (
    <div className="card">
      <div className="card__body">
        <h1 className="card__body__title">{post.title}</h1>
        <p className="card__body__text">{post.body}</p>
      </div>
      <button className="card__button" onClick={() => deletePost(post.id)}>
        Delete
      </button>
    </div>
  )
}

export default PostCard;