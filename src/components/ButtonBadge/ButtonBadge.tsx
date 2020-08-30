import React from 'react'
import Link from 'next/link'

interface ButtonBadgeGradientProps {
  text: string
  isLink: boolean
  url: string
  isTargetBlank: boolean
}

const ButtonBadgeGradient = ({
  text,
  isLink,
  url,
  isTargetBlank
}: ButtonBadgeGradientProps) => {
  const renderLink = () => {
    return isTargetBlank ? (
      <Link href={url}>
        <a target="_blank">{text}</a>
      </Link>
    ) : (
      <Link href={url}>
        <a>{text}</a>
      </Link>
    )
  }

  return (
    <div className="container_button-badge-gradient">
      {isLink && url && url !== '#' ? renderLink() : <p>{text}</p>}
    </div>
  )
}

export default ButtonBadgeGradient
