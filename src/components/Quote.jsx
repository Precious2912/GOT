import React from 'react'

const Quote = ({quote, hideQuote}) => {
  return (
    <div className="quote-area">
      <div className="quotation">
        <span>&#10077;</span>
      </div>
      <p className={quote.quote.length > 250 ? "quote1" : "quote2"}>
        {quote.quote}
      </p>
      <div className="quotation2">
        <span>&#10078;</span>
      </div>

      <p className="quoter">- {quote.quoter}</p>
      <button style={{
        marginTop: '1rem'
      }}className="btn-primary" onClick={() => hideQuote()}>
        Hide
      </button>
    </div>
  );
}

export default Quote