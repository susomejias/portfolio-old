import { useEffect } from 'react'

const useInfiniteScroll = (
  refTriggerElement: React.RefObject<HTMLInputElement>,
  handleMoreData: () => void
): void => {
  const handleObserver = (entities) => {
    const target = entities[0]
    if (target.isIntersecting) {
      handleMoreData()
    }
  }
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.5
    }
    const observer = new IntersectionObserver(handleObserver, options)
    if (refTriggerElement.current) {
      observer.observe(refTriggerElement.current)
    }
  }, [])
}

export default useInfiniteScroll
