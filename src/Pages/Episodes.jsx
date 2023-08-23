import React, {useEffect, useState} from 'react'
import Card from '../Card/Card'
import InputGroup from '../Filter/Category/InputGroup'

const Episodes = () => {
  const [results, setResults] = useState([])
  const [info, setInfo] = useState([])
  const {air_date, episode, name} = info
  const [id, setId] = useState(1)

  let api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(response => response.json())
      setInfo(data)
    
      let charactersPromises = data.characters.map((item) => {
        return fetch(item).then(response => response.json())
      })
      let characterData = await Promise.all(charactersPromises)
      setResults(characterData)
    })()
  }, [api])


  return (
    <div className='container'>
        <div className="row mb-3">
          <h1 className='text-center mb-3'>
              Episode name :{" "}
              <span className='text-primary'>{name === "" ? "Unknown" : name}</span>
          </h1>
          <h5 className='text-center'>
              Air Date: {air_date === "" ? "Unknown" : air_date}
          </h5>
        </div>

        <div className="row">
          <div className='col-lg-3 col-12 mb-4'>
            <h4 className='text-center mb-4'>
                Pick Episode
            </h4>
            <InputGroup
                name="Episode"
                changeID={setId}
                total={51}
            />
          </div>

          <div className='col-lg-8 col-12'>
            <div className="row">
                <Card
                    results={results}
                />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Episodes
