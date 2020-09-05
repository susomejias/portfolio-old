import { useState, useEffect } from 'react'

const usePaginationArray = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [dataDisplayed, setDataDisplayed] = useState([])
  const maxPage = Math.ceil(data.length / itemsPerPage)

  useEffect(() => {
    const begin = (currentPage - 1) * itemsPerPage
    const end = begin + itemsPerPage
    const dataSlice = data.slice(begin, end)
    dataSlice.forEach((element) => {
      setDataDisplayed((dataDisplayed) => [...dataDisplayed, element])
    })
  }, [currentPage])

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
  }

  return { dataDisplayed, next, currentPage, maxPage }
}

export default usePaginationArray
