import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className='navbar'>
      <li>
        <Link className={styles.link} href='/galaxy'><ul >Galaxy</ul></Link>
         <Link className={styles.link} href='/about'><ul >About</ul></Link>
      </li>



    </div>
  )
}

export default Navbar