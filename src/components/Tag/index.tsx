import React from 'react'

interface TagProps {
  text: string
}

const Tag = ({ text }: TagProps) => {
  return <span className="tag">{text}</span>
}

export default React.memo(Tag)
