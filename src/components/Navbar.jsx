import React, { useState } from 'react'
import {ReactComponent as Logo} from '../got.svg'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({fetchQuote, handleSearch}) => {
  const [text, setText] = useState("")
  const location = useLocation()

  const search = (e) => {
    setText(e.target.value);
    handleSearch(text)
  }

  return (
    <div className='navbar'>
      <Link to={'/'}><Logo className='logo'/></Link>
      {location.pathname === '/' &&
        <div className="nav">
            <input type="text" value={text} onChange={(e) => search(e)} className="search" placeholder='Search character' />
            <button className="btn-primary" onClick={() => fetchQuote()}>Random Quote</button>
        </div>
      }
    </div>
  )
}

export default Navbar