import React, { useState } from 'react'
import {ReactComponent as Logo} from '../got.svg'
import { Link } from 'react-router-dom'

const Navbar = ({fetchQuote, handleSearch}) => {
  const [text, setText] = useState("")

  const search = (e) => {
    setText(e.target.value);
    handleSearch(text)
  }

  return (
    <div className='navbar'>
      <Link to={'/'}><Logo className='logo'/></Link>
      <div className="nav">
          <input type="text" value={text} onChange={(e) => search(e)} className="search" placeholder='Search character' />
          <button className="btn-primary" onClick={() => fetchQuote()}>Get Random Quote</button>
      </div>
    </div>
  )
}

export default Navbar