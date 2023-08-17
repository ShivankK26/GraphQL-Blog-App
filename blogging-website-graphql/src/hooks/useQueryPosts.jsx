import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { graphcms } from '../Graphql/Queries';
import { useMyContext } from '../context/store';

const useQueryPosts = ({query}) => {
    const { slug } = useParams();
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('');

    const { setLoading } = useMyContext()
  
  
    useEffect(() => {
      setStatus('start')
      setLoading(true);
      graphcms.request(query, {slug})
      .then(res => { 
        setStatus('success')
        setPosts(res.posts)
        setError(null)
    })
    .catch(error => {
        setStatus('error')
        setError(error.message)
        setPosts([])
    })
    .finally(() => setLoading(false))
    }, [query, slug])


  return { posts, error, status }
}

export default useQueryPosts