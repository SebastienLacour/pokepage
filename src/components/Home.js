import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './Home.css'
import Filter from './Filter'

export default function Home() {

    const [data, setData] = useState([])

    const fetchData = () => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon")
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.error(error))
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(data)

    const onFilterTypeSelected = () => {
        data.filter(el => el.apiTypes.name)
    }

  return (
    <div className='home'>
        <h1>ça marche</h1>
        <Filter filterTypeSelected={onFilterTypeSelected}/>
        <main className='pokelist'>
            {data.map(pokemon => (
                <div className='pokeitem'>
                    <Link to={"/pokemon/" + pokemon.id}>
                        <h2 key={pokemon.id}>{pokemon.name}</h2>
                        <img src={pokemon.image} alt={pokemon.name} className='pokeimage'/>
                        <div className='poketypes'>
                            {pokemon.apiTypes.map(types => (
                                <span className='poketypes__item'>{types.name}</span>
                            ))}
                        </div>
                    </Link>
                </div>
            ))}
        </main>
    </div>
  )
}
