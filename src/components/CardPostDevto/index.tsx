import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReactPlaceholder from 'react-placeholder'

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
  const [isLoadImage, setIsLoadImage] = useState(false)
  return (
    <Link href={url} passHref>
      <a className="card-devto-post" target="_blank" rel="noreferrer">
        <div className="card-container-image">
          <ReactPlaceholder
            type="rect"
            showLoadingAnimation={true}
            firstLaunchOnly={false}
            ready={isLoadImage}
            style={{
              marginRight: '0',
              position: 'absolute'
            }}
            // eslint-disable-next-line react/no-children-prop
            children={null}
          ></ReactPlaceholder>
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="top left"
            onLoad={() => setIsLoadImage(true)}
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
  )
}

export default React.memo(CardPostDevto)
