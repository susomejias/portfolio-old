import React from 'react'

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
  const renderCardIfIsLink = () => {
    return (
      <a className="card" href={url} target="_blank" rel="noreferrer">
        <div
          className="card-container-image"
          style={{
            backgroundImage: `url("${image}.png")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

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
                  <img
                    className="card-author-image"
                    src={`${author.image}.png`}
                    alt={author.name}
                  ></img>
                  <span className="card-author-name">{author.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </a>
    )
  }

  const renderCardIfNotIsLink = () => {
    return (
      <div className="card">
        <div
          className="card-container-image"
          style={{
            backgroundImage: `url("${image}.png")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

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
                  <img
                    className="card-author-image"
                    src={`${author.image}.png`}
                    alt={author.name}
                  ></img>
                  <span className="card-author-name">{author.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return url && url !== '#' ? renderCardIfIsLink() : renderCardIfNotIsLink()
}

export default Card
