import React from 'react'

const Quote = ({quote}) => {
  return (
    <div className="quote-area">
        <div className="quotation">
            <span>&#10077;</span>
        </div>
        <p className="quote" style={{
            fontSize: quote.quote.length > 250 ? '1rem' : quote.quote.length > 200 ? '1.5rem' : '2rem'
        }}>{quote.quote}</p>
        <div className="quotation2">
            <span>&#10078;</span>
        </div>

        <p className="quoter">- {quote.quoter}</p>
    </div>
  )
}

export default Quote