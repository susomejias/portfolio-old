import React, { useEffect } from 'react'

import { getMePosts } from '../services/DevtoService'

const DevtoPosts = () => {
  const devtoMePosts = getMePosts()

  console.log(devtoMePosts)
  return (
    <div className="wrapper">
      <h1 className="page-title tracking-in-expand">Dev.to posts</h1>
    </div>
  )
}

export default React.memo(DevtoPosts)
