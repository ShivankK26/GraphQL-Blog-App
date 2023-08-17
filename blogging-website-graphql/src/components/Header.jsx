import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from '../components/NavLinks'

import { graphcms, QUERY_SLUG_CATEGORIES } from '../Graphql/Queries'

const Header = () => {
  const [categories, setCategories] = useState([]);


  useEffect(() =>{
    graphcms.request(QUERY_SLUG_CATEGORIES)
    .then(res => setCategories(res.categories))
  }, [])


  return (
    <header>
      <input type="checkbox" className="menu-btn" hidden/>
      <nav>
        <Link to="/" className='logo'>Graphcms</Link>
        <NavLinks categories={categories}/>

        <label htmlFor="menu-btn" className='fa-solid fa-bars'/>
      </nav>
    </header>
  )
}

export default Header