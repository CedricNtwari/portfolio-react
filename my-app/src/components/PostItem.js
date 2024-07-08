import React from 'react'
import css from './css/Content.module.css'

export default function PostItem(props) {
  return (
    <div>
      {props.savedPosts.map((post) => {
        const { title, name, image, description } = post
        return (
          <div key={title} className={css.SearchResults}>
            <div>{title}</div>
            <div>{name}</div>
            <img src={image} alt={title} className={css.PostImage} />
            <div>{description}</div>
          </div>
        )
      })}
    </div>
  )
}
