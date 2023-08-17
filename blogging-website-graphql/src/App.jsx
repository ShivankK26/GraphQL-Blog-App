import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../src/pages/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import PostsByCategory from './pages/PostsByCategory.jsx'
import Search from './components/Search.jsx'
import SearchResult from './pages/SearchResult.jsx'
import Article from './pages/Article.jsx'
import Loading from './components/Loading.jsx'
import { useMyContext } from './context/store.jsx'
import ScrollButton from './components/ScrollButton.jsx'
import NotFound from './components/NotFound.jsx'

const App = () => {
  const {loading} = useMyContext()
  return (
    <React.Fragment>
     { loading && <Loading /> }
     <Header/>
     <Search/>

     <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/posts/:slug' element={<PostsByCategory/>} />
          <Route path='/search/:slug' element={<SearchResult/>} />
          <Route path='/article/:slug' element={<Article/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
     </main>  

     <Footer/>
     <ScrollButton/>
    </React.Fragment>
  )
}

export default App