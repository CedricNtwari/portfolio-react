import React from 'react'
import css from './css/Content.module.css'

export default function PostItem(props) {
  return (
    <div>
      {props.savedPosts.map((post) => {
        const { id, type, user, webformatURL, tags } = post
        return (
          <div className={css.SearchItem} key={id}>
            <p>{type}</p>
            <p>{user}</p>
            <img src={webformatURL} alt="random" />
            <p>{tags}</p>
          </div>
        )
      })}
    </div>
  )
}
