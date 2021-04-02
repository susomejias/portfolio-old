import React, { CSSProperties, useState } from 'react'
import Image from 'next/image'
import ReactPlaceholder from 'react-placeholder'

type ImageWithPlaceholderProps = {
  imageClassNames?: string
  imageUrl: string
  imageAriaLabel?: string
  imageTitle?: string
  imageQuality?: number
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  showLoadingAnimation?: boolean
  placeholderType?: 'text' | 'media' | 'textRow' | 'rect' | 'round'
  style?: CSSProperties
}

const ImageWithPlaceholder = (props: ImageWithPlaceholderProps) => {
  const {
    imageClassNames,
    imageUrl,
    imageAriaLabel,
    imageTitle,
    imageQuality = 75,
    objectFit = 'cover',
    showLoadingAnimation = true,
    placeholderType = 'rect',
    style
  } = props
  const [showPlaceholder, setIsShowPlaceholder] = useState(false)

  return (
    <div className="image-placeholder" style={style}>
      <ReactPlaceholder
        type={placeholderType}
        firstLaunchOnly={true}
        showLoadingAnimation={showLoadingAnimation}
        ready={showPlaceholder}
        style={{
          marginRight: '0',
          position: 'absolute'
        }}
        // eslint-disable-next-line react/no-children-prop
        children={null}
      />
      <Image
        className={imageClassNames}
        src={imageUrl}
        layout="fill"
        objectFit={objectFit}
        objectPosition="top left"
        aria-label={imageAriaLabel}
        quality={imageQuality}
        title={imageTitle}
        onLoad={() => {
          setIsShowPlaceholder(true)
        }}
      />
    </div>
  )
}

export default React.memo(ImageWithPlaceholder)
