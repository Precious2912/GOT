import Characters from './Characters'
import Quote from "./Quote";

const Home = ({quote, quoteFetched, search}) => {

  return (
    <>
        {quoteFetched && <Quote quote={quote}/>}
        <Characters search={search}/>
    </>
  )
}

export default Home