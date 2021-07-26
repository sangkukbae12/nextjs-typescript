import React from 'react'
import { InferGetStaticPropsType } from "next";

import { Post } from "../types";
import AddPost from "../components/AddPost";
import PostCard from "../components/Post";

const API_URL: string = 'https://jsonplaceholder.typicode.com/posts'

export default function Home({ _posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [posts, setPosts] = React.useState<Post[]>(_posts)

  const addPost = async (e: React.FormEvent, formData: Post) => {
    e.preventDefault()
    const post: Post = {
      ...formData,
      id: Date.now()
    }
    setPosts([post, ...posts])
  }

  const deletePost = async (id: number) => {
    const _posts: Post[] = posts.filter((post: Post) => post.id !== id)
    setPosts(_posts)
  }

  if (!posts) {
    return <h1>Loading...</h1>
  }

  return (
    <main className="container">
      <h1>My Posts</h1>
      <AddPost savePost={addPost} />
      {posts.map((post: Post) => (
        <PostCard key={post.id} deletePost={deletePost} post={post} />
      ))}
    </main>
  )
}

export async function getStaticProps() {
  const _posts: Post[] = await fetch(API_URL).then(res => res.json())

  return { props: { _posts } }
}
