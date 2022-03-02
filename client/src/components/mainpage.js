import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import Characters from './characters'

const Mainpage = () => {
    const [name, setName] = useState('')
    const [characters, setCharacters] = useState([])
    const [FilteredCharacters, setFilteredCharacters] = useState([])

    useEffect(() => {
        const fetchName = async () => {
            const fetchedName = await Axios.get('http://localhost:1340/api/characters')
            setCharacters(fetchedName.data)
        }
        fetchName()
    }, [])

    useEffect(() => {
        setFilteredCharacters(characters.filter((character) => character.name.toUpperCase().includes(name.toUpperCase())))
    }, [name, characters])

    return(
        <div className='MainPage'>
            <h1 className='Title'>Friends</h1>
            <input type='text' onChange={(event) => setName(event.target.value)} />
            <div>{FilteredCharacters.map(character => {
            return(
                <Characters characterName={character.name} />
            )
             })
                } </div>
        </div>
    )
}

export default Mainpage