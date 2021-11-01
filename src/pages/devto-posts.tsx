import React from 'react'
import Head from 'next/head'
import InfiniteScroll from 'react-infinite-scroll-component'

import usePaginationArray from '../hooks/usePaginateArray'
import DevtoService from '../services/DevtoService'
import CardPostDevto from '../components/CardPostDevto'
import ButtonScrollToTop from '../components/ButtonScrollToTop'

interface DevtoPostsProps {
  posts: DevtoPost[]
}

const DevtoPosts = ({ posts }: DevtoPostsProps): JSX.Element => {
  const { dataDisplayed, next, currentPage, maxPage } = usePaginationArray(
    posts,
    3
  )

  return (
    <>
      <Head>
        <title>Susomejias | Dev.to posts</title>
        <meta
          name="description"
          content="Posts publicados en la plataforma devto"
        />
        <link rel="canonical" href="https://susomejias.dev/devto-posts" />
      </Head>
      <section className="wrapper-scroll">
        <h1 className="page-title ">Dev.to posts</h1>
        <InfiniteScroll
          dataLength={dataDisplayed.length}
          next={next}
          hasMore={currentPage < maxPage}
          loader={null}
          scrollThreshold={0.7}
          style={{
            width: '100%',
            overflow: 'hidden'
          }}
        >
          {dataDisplayed.map((devtoPost: DevtoPost, index: number) => {
            return (
              <CardPostDevto
                key={index}
                image={devtoPost.cover_image}
                title={devtoPost.title}
                description={devtoPost.description}
                commentsCount={devtoPost.comments_count}
                reactions={devtoPost.positive_reactions_count}
                url={devtoPost.canonical_url}
                tags={devtoPost.tag_list}
                priority={true}
              />
            )
          })}
        </InfiniteScroll>
        <ButtonScrollToTop />
      </section>
    </>
  )
}

export const getStaticProps = async (): Promise<{
  props: { posts: DevtoPost[] }
  revalidate: number
}> => {
  const posts = await DevtoService.getDevtoPosts()
  return { props: { posts }, revalidate: 7200 /* In 3 hours */ }
}

export default DevtoPosts
