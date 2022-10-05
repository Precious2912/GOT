import Navbar from "./components/Navbar";
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import CharacterDetail from './components/CharacterDetail'

function App() {
  const [quote, setQuote] = useState({})
  const [quoteFetched, setQuoteFetched] = useState(false)
  const [searchText, setSearchText] = useState("")

  const getQuote = async () => {
    const response = await fetch('https://game-of-thrones-quotes.p.rapidapi.com/api/quote/random',
    {
        headers: {
            'X-RapidAPI-Key': '19cfffa33amsh3c96d983efb7869p1b117ajsnb55b3e16524a',
            'X-RapidAPI-Host': 'game-of-thrones-quotes.p.rapidapi.com'
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
