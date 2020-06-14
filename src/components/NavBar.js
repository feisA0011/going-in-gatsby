import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"

const NavBar = () => {

  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/examples">Examples</Link>
          </li>
          <li>
            <Link to="/images">Images</Link>
          </li>


        </ul>
      </nav>
    </div>
  )
}

export default NavBar
