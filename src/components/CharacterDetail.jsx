import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const CharacterDetail = () => {
    const [quotes, setQuotes] = useState(null)
    const [character, setCharacter] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams();
    const apiKey = process.env.REACT_APP_RAPIDAPIKEY
    const baseUrl = process.env.REACT_APP_RAPIDAPIHOST

    useEffect(() => {
        const get = async () => {
            const data = await getCharacter()
            setCharacter(data)
            setIsLoading(false)
            await getQuotes(data.fullName)
        }
        get()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getCharacter = async () => {
        const response = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
        return await response.json()
    }

    const getQuotes = async (name) => {
        const data = name.toLowerCase().split(' ').join('_')
        const response = await fetch(`https://${baseUrl}/api/quote/by/${data}`,
        {
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': baseUrl
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
                            <p><span className="detail-title">Name</span>: {character.fullName}</p>
                            <p><span className="detail-title">Family</span>: {character.family}</p>
                            <p><span className="detail-title">Title</span>: {character.title}</p>
                            {quotes && <p><span className="detail-title">Random Quote</span>: "{quotes.quote}"</p>}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CharacterDetail