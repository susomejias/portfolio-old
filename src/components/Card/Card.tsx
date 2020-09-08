import React from 'react'
import { BackgroundImage } from 'react-image-and-background-image-fade'

import RoundedImage from '../RoundedImage/RoundedImage'
interface CardProps {
  image: string
  title: string
  description: string
  showPrivateCodeMessagge: boolean
  url: string
  authors: Author[]
}

const Card = ({
  image,
  title,
  description,
  showPrivateCodeMessagge,
  url,
  authors
}: CardProps) => {
  const renderContentCard = () => {
    return (
      <>
        <BackgroundImage
          src={`${image}.png`}
          width="400px"
          height="350px"
          lazyLoad
          useChild
          transitionTime="1.5s"
        >
          <div
            style={{
              width: '400px',
              height: '350px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </BackgroundImage>

        <div className="card-container-content">
          {showPrivateCodeMessagge ? (
            <span className="private-code-message">
              <i className="fas fa-lock"></i>
              Código privado
            </span>
          ) : null}
          <h3 className="card-title">{title}</h3>
          <h4 className="card-description">{description}</h4>
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
