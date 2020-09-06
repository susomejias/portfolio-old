import useSWR from 'swr'

export const getMePosts = () => {
  const url =
    'https://dev.to/api/articles?username=susomejias&state=all&per_page=1000'
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR(url, fetcher)

  if (!data) return error

  return data
}
