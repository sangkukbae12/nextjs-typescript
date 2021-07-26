import React from 'react'
import { Post } from '../types'

type Props = {
  savePost: (e: React.FormEvent, formData: Post) => void
}

const AddPost: React.FC<Props> = ({ savePost }) => {
  const [formData, setFormData] = React.useState<Post>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData!,
      [e.currentTarget.id]: e.currentTarget.value
    })
  }
  
  const isEmpty = !formData!.title || !formData!.body

  return (
    <form className="form" onSubmit={e => savePost(e, formData!)}>
      <div className="">
        <div className="form__field">
          <label htmlFor="name">Title</label>
          <input type="text" id='title' onChange={handleForm} />
        </div>
        <div className="form__field">
          <label htmlFor="body">Description</label>
          <input type="text" id='body' onChange={handleForm} />
        </div>
      </div>
      <button className="form__button" disabled={isEmpty ? true : false}>
        Add Post
      </button>
    </form>
  )
}

export default AddPost;