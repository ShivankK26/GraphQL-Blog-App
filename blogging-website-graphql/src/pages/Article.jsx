import React from 'react'
import { QUERY_ONE_POST } from '../Graphql/Queries';
import Posts from '../components/Posts';
import Post from '../components/Post'
import useQueryPosts from '../hooks/useQueryPosts';

const Article = () => {
  
    const { posts, error } = useQueryPosts({query: QUERY_ONE_POST})
    
    if (error) return <h2 style={{textAlign: "center"}}>{error}</h2>;  
    return (
      <div className='post-container'>
         {
            posts?.map(post => (
                <React.Fragment key={post.id}>
                    <Post post={post} />
                </React.Fragment>
            ))
         }
      </div>
    )
}

export default Article