import React from 'react'
import { BackgroundImage } from 'react-image-and-background-image-fade'

import RoundedImage from '../RoundedImage'
interface CardProps {
  image: string
  title: string
  description: string
  showPrivateCodeMessage: boolean
  url: string
  authors: Author[]
}

const Card = ({
  image,
  title,
  description,
  showPrivateCodeMessage,
  url,
  authors
}: CardProps) => {
  const renderContentCard = () => {
    return (
      <>
        <div className="card-container-image">
          <BackgroundImage
            src={`${image}.png`}
            width="100%"
            height="314px"
            lazyLoad
            disableLoader
            style={{
              backgroundPosition: 'top center',
              backgroundOrigin: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>

        <div className="card-container-content">
          {showPrivateCodeMessage ? (
            <span className="private-code-message">
              <i className="fas fa-lock"></i>
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
      <a className="card" href={url} target="_blank" rel="noreferrer">
        {renderContentCard()}
      </a>
    )
  }

  const renderCardIfNotIsLink = () => {
    return <div className="card">{renderContentCard()}</div>
  }

  return url && url !== '#' ? renderCardIfIsLink() : renderCardIfNotIsLink()
}

export default React.memo(Card)
