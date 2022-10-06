import Navbar from "./components/Navbar";
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import CharacterDetail from './components/CharacterDetail'

function App() {
  const [quote, setQuote] = useState({})
  const [quoteFetched, setQuoteFetched] = useState(false)
  const [searchText, setSearchText] = useState("")
  const apiKey = process.env.REACT_APP_RAPIDAPIKEY
  const baseUrl = process.env.REACT_APP_RAPIDAPIHOST

  const getQuote = async () => {
    const response = await fetch(`https://${baseUrl}/api/quote/random`,
    {
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': baseUrl
        }
    })
    const result = await response.json()
    setQuote(result)
    setQuoteFetched(true)
  }

  const handleSearch = (text) => {
    setSearchText(text)
  }

  return (
    <div className="App">
      <Router>
        <Navbar handleSearch={handleSearch} fetchQuote={getQuote}/>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home quote={quote} search={searchText} quoteFetched={quoteFetched}/>}/>
            <Route path="/characters/:id" element={<CharacterDetail/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
