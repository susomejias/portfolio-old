import React from 'react'
import Link from 'next/link'

interface ButtonBadgeGradientProps {
  text: string
  url: string
  isTargetBlank: boolean
}

const ButtonBadgeGradient = ({
  text,
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
    <div className="button-badge-gradient slide-in-fwd-center">
      {url && url !== '#' ? renderLink() : <p>{text}</p>}
    </div>
  )
}

export default React.memo(ButtonBadgeGradient)
