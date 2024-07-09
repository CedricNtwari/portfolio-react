import React, { Component } from 'react'
import css from './css/Content.module.css'
import { savedPosts } from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

export default class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      posts: [],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        posts: savedPosts,
      })
    }, 2000)
  }

  handleChange = (event) => {
    const search = event.target.value
    const filteredPosts = savedPosts.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase())
    })
    this.setState({
      posts: filteredPosts,
    })
  }

  render() {
    return (
      <div>
        <div className={css.TitleBar}>
          <form>
            <label htmlFor="search">Search:</label>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="By Author"
              onChange={this.handleChange}
            />
          </form>
          <h4>Posts found: {this.state.posts.length}</h4>
        </div>
        <div className={css.Searchresults}>
          {this.state.isLoaded ? <PostItem savedPosts={this.state.posts} /> : <Loader />}
        </div>
      </div>
    )
  }
}
