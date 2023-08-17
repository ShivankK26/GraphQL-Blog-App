import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <span className='copyright'>Copyright 2023</span>
      <span className='author'>Shivank Kapur</span>


      <div className="footer-social">
        <Link to="/"><i className='fab fa-facebook-f'></i></Link>
        <Link to="/"><i className='fab fa-youtube'></i></Link>
        <Link to="/"><i className='fab fa-twitter'></i></Link>
        <Link to="/"><i className='fab fa-instagram'></i></Link>

      </div>
    </footer>
  )
}

export default Footer