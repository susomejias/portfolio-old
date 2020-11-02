import React from 'react'
import Image from 'next/image'

interface CardPostDevtoProps {
  image: string
  title: string
  description: string
  commentsCount: number
  reactions: number
  url: string
  tags: string[]
}

const CardPostDevto = ({
  image,
  title,
  description,
  commentsCount,
  reactions,
  url,
  tags
}: CardPostDevtoProps) => {
  return (
    <a className="card-devto-post" href={url} target="_blank" rel="noreferrer">
      <div className="card-container-image">
        <Image
          className="text-focus-in"
          src={`${image}`}
          width="500px"
          height="250px"
          quality={60}
          alt={title}
        />
      </div>

      <div className="card-container-content">
        <h3 className="card-title">{title}</h3>
        <h4 className="card-description">{description}</h4>
        <div className="card-reactions">
          <div className="card-reaction">
            <i className="fas fa-lg fa-comment"></i>
            {commentsCount}
          </div>

          <div className="card-reaction">
            <i className="fas fa-poll fa-lg"></i>
            {reactions}
          </div>
        </div>
        <div className="card-tags">
          {tags.map((tag: string, index: number) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default React.memo(CardPostDevto)
