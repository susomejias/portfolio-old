import React from 'react'
import { Image } from 'react-image-and-background-image-fade'

interface RoundedImageProps {
  image: string
  size: string
}

const RoundedImage = ({ image, size }: RoundedImageProps) => {
  const getSizeClass = () => {
    if (!size) return 'small'
    switch (size.toLowerCase()) {
      case 'small':
        return 'small'
      case 'medium':
        return 'medium'
      case 'large':
        return 'large'
      default:
        return 'small'
    }
  }

  return (
    <div className={`container-image ${getSizeClass()}`}>
      <Image
        src={`${image}.png`}
        width="100%"
        height="100%"
        lazyLoad
        wrapperClassName="rounded-image"
        transitionTime="2.5s"
      />
    </div>
  )
}

export default React.memo(RoundedImage)
