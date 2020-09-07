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
    <picture className="text-focus-in">
      <source srcSet={`${image}.webp`} type="image/webp" />
      <source srcSet={`${image}.jpg`} type="image/jpeg" />
      <source srcSet={`${image}.png`} type="image/png" />
      <img className={`rounded-image ${getSizeClass()}`} src={`${image}.png`} />
    </picture>
  )
}

export default React.memo(RoundedImage)
