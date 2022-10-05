import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const CharacterDetail = () => {
    const [quotes, setQuotes] = useState(null)
    const [character, setCharacter] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams();

    useEffect(() => {
        const get = async () => {
            const data = await getCharacter()
            setCharacter(data)
            setIsLoading(false)
            getQuotes(data.fullName)
        }
        get()
    }, [])

    const getCharacter = async () => {
        const response = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
        return await response.json()
    }

    const getQuotes = async (name) => {
        const data = name.toLowerCase().split(' ').join('_')
        const response = await fetch(`https://game-of-thrones-quotes.p.rapidapi.com/api/quote/by/${data}`,
        {
            headers: {
                'X-RapidAPI-Key': '19cfffa33amsh3c96d983efb7869p1b117ajsnb55b3e16524a',
                'X-RapidAPI-Host': 'game-of-thrones-quotes.p.rapidapi.com'
            }
        })
        const result = await response.json()
        setQuotes(result)
    }

    return (
        <div>
            {isLoading && <p>Loading . . .</p>}
            {!isLoading && 
                <div className="character-details">
                    <div className="character-detail">
                        <img src={character.imageUrl} alt={`${character.fullName}`}/>
                        <div className="details">
                            <p>Name: {character.fullName}</p>
                            <p>Family: {character.family}</p>
                            <p>Title: {character.title}</p>
                            {quotes && <p>Random Quote: "{quotes.quote}"</p>}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CharacterDetail