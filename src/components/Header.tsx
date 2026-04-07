import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='headerDiv'><Link href="/" className='hLogo'>KennDeinenStoff</Link></div>
        <div className='headerDiv'>
            <input type="search" name="search" id="search" placeholder='Suche...' />
        </div>
        <div className='headerDiv'>
            <Link href="/substances" className='navLink'>Alle Substanzen</Link>
            <Link href="/get-help" className='navLinkBtn'>Hilfe erhalten</Link>
        </div>
    </div>
  )
}

export default Header