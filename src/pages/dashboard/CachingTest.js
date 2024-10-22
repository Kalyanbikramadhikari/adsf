import React from 'react'
import { useGetPatientsQuery } from '../../store/APIFeatures/PatientApi'
import { Link } from "react-router-dom";



const CachingTest = () => {
    const {data, isLoading, error} = useGetPatientsQuery()
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
        {data.results.map((item, index)=><div key={index}>
            {item.name}
            {item.url}
            <Link to='/hello'>
            <button className=''>next</button>

            </Link>
        </div>)}
          {/* <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} /> */}
        </>
      ) : null}
    </div>
  )
}

export default CachingTest