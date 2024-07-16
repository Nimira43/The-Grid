// import { useState } from 'react'
// import { fetchPosts, deletePost, updatePost } from './api'

// const maxPostPage = 10

export function Posts() {
  // const [currentPage, setCurrentPage] = useState(0)
  // const [selectedPost, setSelectedPost] = useState(null)
  // const data = []

  return (
    <>
      {/* <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className='post-title'
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="page">
        <button disabled onClick={() => { }}>
          Previous Page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => { }}>
          Next Page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />} */}
      <h1>Posts</h1>
    </>
  )
}