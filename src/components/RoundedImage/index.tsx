import React from 'react'
import Image from 'next/image'

import { toBase64 } from '../../helpers/image.helper'

interface RoundedImageProps {
  alt?: string
  image: string
  size: string
  priority?: boolean
}

const RoundedImage = ({
  alt = '',
  image,
  size,
  priority = false
}: RoundedImageProps) => {
  const SMALL_SIZE = { width: 46, height: 46, className: 'small' }
  const MEDIUM_SIZE = { width: 130, height: 130, className: 'medium' }
  const LARGE_SIZE = { width: 180, height: 180, className: 'large' }
  const getSize = () => {
    if (!size) {
      return SMALL_SIZE
    }
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
    <div className={`container-image ${getSize().className}`}>
      <Image
        alt={alt}
        className="rounded-image"
        width={getSize().width}
        height={getSize().height}
        src={image}
        objectFit="cover"
        objectPosition="top left"
        priority={priority}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(image)}`}
      />
    </div>
  )
}

export default React.memo(RoundedImage)
