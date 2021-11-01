import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { toBase64 } from '../../helpers/image.helper'

interface CardPostDevtoProps {
  image: string
  title: string
  description: string
  commentsCount: number
  reactions: number
  url: string
  tags: string[]
  priority?: boolean
}

const CardPostDevto = ({
  image,
  title,
  description,
  commentsCount,
  reactions,
  url,
  tags,
  priority = false
}: CardPostDevtoProps) => {
  return (
    <article className="card-devto-post">
      <Link href={url} passHref>
        <a target="_blank" rel="noreferrer">
          <div className="card-container-image">
            <Image
              alt=""
              src={image}
              layout="fill"
              objectFit="cover"
              objectPosition="top left"
              aria-label={title}
              priority={priority}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(image)}`}
            />
          </div>

          <div className="card-container-content">
            <h2 className="card-title">{title}</h2>
            <h3 className="card-description">{description}</h3>
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
      </Link>
    </article>
  )
}

export default React.memo(CardPostDevto)
