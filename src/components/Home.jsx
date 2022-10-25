import Characters from './Characters'
import Quote from "./Quote";

const Home = ({quote, quoteFetched, search, hideQuote}) => {

  return (
    <>
        {quoteFetched && <Quote quote={quote} hideQuote={hideQuote}/>}
        <Characters search={search}/>
    </>
  )
}

export default Home