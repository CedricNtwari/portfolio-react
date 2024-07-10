import React, { useState, useEffect } from 'react'
import css from './css/Content.module.css'
import { savedPosts } from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

function Content() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
      setPosts(savedPosts)
    }, 2000)
  }, [])

  const handleChange = (event) => {
    const search = event.target.value
    const filteredPosts = savedPosts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()),
    )
    setPosts(filteredPosts)
  }

  return (
    <div>
      <div>
        <div className={css.TitleBar}>
          <form>
            <label htmlFor="search">Search:</label>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="By Author"
              onChange={handleChange}
            />
          </form>
          <h4>Posts found: {posts.length}</h4>
        </div>
        <div className={css.Searchresults}>
          {isLoaded ? <PostItem savedPosts={posts} /> : <Loader />}
        </div>
      </div>
    </div>
  )
}

export default Content
