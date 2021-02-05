import React, { useState } from 'react'
import Image from 'next/image'
import ReactPlaceholder from 'react-placeholder'

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

  const [isLoadImage, setIsLoadImage] = useState(false)

  return (
    <div className="container-image">
      <ReactPlaceholder
        type="round"
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
        className={`rounded-image ${getSize().className}`}
        src={image}
        layout="intrinsic"
        width={`${getSize().width}px`}
        height={`${getSize().height}px`}
        priority={priority}
        onLoad={() => setIsLoadImage(true)}
      />
    </div>
  )
}

export default React.memo(RoundedImage)
