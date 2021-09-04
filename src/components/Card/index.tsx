import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import RoundedImage from '../RoundedImage'

interface CardProps {
  image: string
  title: string
  description: string
  showPrivateCodeMessage: boolean
  url: string
  authors: Author[]
  priority?: boolean
}

const Card = ({
  image,
  title,
  description,
  showPrivateCodeMessage,
  url,
  authors,
  priority = false
}: CardProps) => {
  const renderContentCard = () => {
    return (
      <>
        <div className="card-container-image">
          <Image
            alt=""
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="top left"
            aria-label={title}
            priority={priority}
          />
        </div>

        <div className="card-container-content">
          {showPrivateCodeMessage ? (
            <span className="private-code-message">
              <i className="fas fa-lock" />
              Código privado
            </span>
          ) : null}
          <h2 className="card-title">{title}</h2>
          <h3 className="card-description">{description}</h3>
          <div className="card-authors">
            {authors.map((author, index) => {
              return (
                <div className="card-author" key={index}>
                  <RoundedImage image={author.image} size="small" />
                  {authors.length < 4 ? (
                    <span className="card-author-name">{author.name}</span>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }

  const renderCardIfIsLink = () => {
    return (
      <article className="card-link">
        <Link href={url} passHref>
          <a className="link" target="_blank" rel="noreferrer">
            {renderContentCard()}
          </a>
        </Link>
      </article>
    )
  }

  const renderCardIfNotIsLink = () => {
    return <article className="card">{renderContentCard()}</article>
  }

  return url && url !== '#' ? renderCardIfIsLink() : renderCardIfNotIsLink()
}

export default React.memo(Card)
