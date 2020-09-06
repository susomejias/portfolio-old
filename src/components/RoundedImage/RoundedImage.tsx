import React from 'react'

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
    <img
      className={`rounded-image ${getSizeClass()}`}
      src={`${image}.png`}
    ></img>
  )
}

export default React.memo(RoundedImage)
