import React from 'react'
import Image from 'next/image'

interface RoundedImageProps {
  image: string
  size: string
  priority?: boolean
}

const RoundedImage = ({ image, size, priority = false }: RoundedImageProps) => {
  const SMALL_SIZE = { width: 46, height: 46, className: 'small' }
  const MEDIUM_SIZE = { width: 130, height: 130, className: 'medium' }
  const LARGE_SIZE = { width: 180, height: 180, className: 'large' }
  const getSize = () => {
    if (!size) return SMALL_SIZE
    switch (size.toLowerCase()) {
      case 'small':
        return SMALL_SIZE
      case 'medium':
        return MEDIUM_SIZE
      case 'large':
        return LARGE_SIZE
      default:
        return SMALL_SIZE
    }
  }

  return (
    <div className="container-image">
      <Image
        className={`rounded-image ${getSize().className}`}
        src={image}
        layout="intrinsic"
        width={`${getSize().width}px`}
        height={`${getSize().height}px`}
        priority={priority}
      />
    </div>
  )
}

export default React.memo(RoundedImage)
