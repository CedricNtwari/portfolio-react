import React, { Component } from 'react'
import css from './css/Content.module.css'
import { savedPosts } from '../posts.json'
import PostItem from './PostItem'

export default class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <div>
        <div className={css.TitleBar}></div>
        <div className={css.Searchresults}>
          <PostItem savedPosts={savedPosts} />
        </div>
      </div>
    )
  }
}
