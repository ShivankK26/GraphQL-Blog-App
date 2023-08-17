import React from 'react'
import { QUERY_POSTS } from '../Graphql/Queries'
import Posts from '../components/Posts'
import useQueryPosts from '../hooks/useQueryPosts'
import NotFound from '../components/NotFound'

const Home = () => {
  const { posts, error, status } = useQueryPosts({query: QUERY_POSTS})

  if (status === "success" && posts.length === 0) return <NotFound/>
  if (error) return <h2 style={{textAlign: "center"}}>{error}</h2>;
  return (
    <React.Fragment>
     <Posts posts={posts}/> 
    </React.Fragment >
  )
}

export default Home