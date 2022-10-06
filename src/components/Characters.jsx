import { useState, useEffect } from 'react'
import React from 'react'
import Character from './Character'

const Characters = ({search}) => {
    const [characters, setCharacters] = useState(null)
    const [tempCharacters, setTempCharacters] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getCharacters = async () => {
            const data = await fetchCharacters()
            setCharacters(data);
            setTempCharacters(data)
            setIsLoading(false)
        }
        getCharacters()
    }, [])

    useEffect(() => {
        if(search.length < 2) setCharacters(tempCharacters)
        else {
            const filtered = tempCharacters.filter(x => x.fullName.toLowerCase().includes(search))
            setCharacters(filtered)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    const fetchCharacters = async () => {
        const response = await fetch("https://thronesapi.com/api/v2/Characters")
        return await response.json();
    }

    return (
        <>
            {isLoading && <p>Loading . . .</p>}
            <p className='title'>Welcome to the Game of Thrones Universe</p>
            <div className="character-list">
                {!isLoading && characters.map(character => <Character character={character} key={character.id}/>)}
            </div>
        </>
    )
}

export default Characters