import React from 'react'
import { Image } from 'react-image-and-background-image-fade'

interface RoundedImageProps {
  image: string
  size: string
}

const RoundedImage = ({ image, size }: RoundedImageProps) => {
  const getSize = () => {
    if (!size) return '46px'
    switch (size.toLowerCase()) {
      case 'small':
        return '46px'
      case 'medium':
        return '140px'
      case 'large':
        return '180px'
      default:
        return '46px'
    }
  }

  return (
    <Image
      src={`${image}.png`}
      width={getSize()}
      height="200%"
      lazyLoad
      wrapperClassName="rounded-image"
      transitionTime="2.5s"
    />
  )
}

export default React.memo(RoundedImage)
