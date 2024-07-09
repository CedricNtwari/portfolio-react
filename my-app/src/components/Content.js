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
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
      })
    }, 2000)
  }

  render() {
    return (
      <div>
        <div className={css.TitleBar}></div>
        <div className={css.Searchresults}>
          {this.state.isLoaded ? <PostItem savedPosts={savedPosts} /> : <Loader />}
        </div>
      </div>
    )
  }
}
