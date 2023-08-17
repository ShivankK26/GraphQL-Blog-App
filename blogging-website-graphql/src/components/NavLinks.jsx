// useLocation hook to access the current location information. The useLocation hook returns an object 
// that contains various properties related to the current URL. In this case, we are extracting the pathname 
// property, which represents the current URL path (e.g., "/posts/category-1").
import {Link, useLocation} from 'react-router-dom'


const NavLinks = ({categories}) => {
  const { pathname } = useLocation();

  // console.log(pathname);
  return (
      <ul className='menu-lists'>
        <label htmlFor="menu-btn" className='fa-solid fa-xmark'/>
        <Link to="/">
          <li className={`${pathname == '/' ? 'active' : ''}`}>ALL</li> {/* This is for the ALL button given on the website. */}
        </Link>

        {
          categories?.map(category => ( // This is a JavaScript expression that uses the optional chaining operator (?.) to safely iterate through the categories prop. If categories is not defined or is an empty array, the expression will return null, and the map function won't be called.
            <Link key={category.slug} to={`/posts/${category.slug}`}> {/* Inside the map function, we use the Link component to create links to specific categories. The key prop is set to the slug of the category to help React efficiently update the DOM when the list of categories changes. The to prop defines the target URL, which includes the base path "/posts/" followed by the slug of each category. For example, if the slug of a category is "category-1", the resulting URL will be "/posts/category-1". */}
              <li className={`/posts/${category.slug}` === pathname ? 'active' : ''}> {/* This is for the various button of pages on the navbar. */}
                {category.name} {/* Inside the Link, we render the name of the category as the content of each navigation list item (li). This will display the name of each category in the navigation menu. */}
              </li>
            </Link>
          ))
        }
      </ul>
  )
}

export default NavLinks

// The ?. operator after person.address checks if person.address is defined. 
// If it is defined, it proceeds to access the zipCode property. However, if person.address is undefined, 
// the entire expression returns undefined, and no error is thrown. The result is that 
// zipCode will be assigned undefined if person.address does not exist.