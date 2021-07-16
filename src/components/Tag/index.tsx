import React from 'react'

interface TagProps {
  text: string
}

const Tag = ({ text }: TagProps) => {
  return <div className="tag">{text}</div>
}

export default React.memo(Tag)
