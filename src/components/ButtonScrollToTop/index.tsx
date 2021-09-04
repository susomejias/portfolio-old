import React from 'react'

const ButtonScrollToTop = () => {
  return (
    <button
      className="scroll-top-button"
      onClick={() => {
        window.scrollTo(0, 0)
      }}
    >
      <i className="fas fa-angle-up" />
    </button>
  )
}

export default React.memo(ButtonScrollToTop)
