import React, { useState, useEffect } from 'react'
import css from './css/Content.module.css'
import PostItem from './PostItem'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets.js'

function Content() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [posts, setPosts] = useState([])
  const [savedPosts, setSavedPosts] = useState([])

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`,
    )
    const data = await response.data.hits
    console.log(data)

    setIsLoaded(true)
    setSavedPosts(data)
    setPosts(data)
  }

  const handleChange = (event) => {
    const search = event.target.value
    const filteredPosts = savedPosts.filter((post) => {
      return post.user.toLowerCase().includes(search)
    })
    setPosts(filteredPosts)
  }

  return (
    <div className={css.Content}>
      <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <form>
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="searchinput"
            name="search"
            placeholder="By Author"
            onChange={(e) => handleChange(e)}
          />
        </form>
        <h4>Posts found: {posts.length}</h4>
      </div>
      <div className={css.Searchresults}>
        {isLoaded ? <PostItem savedPosts={posts} /> : <Loader />}
      </div>
    </div>
  )
}

export default Content
