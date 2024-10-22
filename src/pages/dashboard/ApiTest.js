import React from 'react'
import { useGetPatientsQuery, usePrefetch } from '../../store/APIFeatures/PatientApi'
// import { patientApi } from '../../store/APIFeatures/PatientApi';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';



const ApiTest = () => {
    const {data, isLoading, error} = useGetPatientsQuery()

    const prefetchUser = usePrefetch('getPatientByID');
    // const dispatch = useDispatch()

    const handleHover =(name)=>{
      // dispatch(patientApi.util.prefetch('getPatientByID',name, {force:true} ))
      prefetchUser(name, {force:true})
    }
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
        {data.results.map((item, index)=><div key={index} onMouseEnter={()=>handleHover(item.name)}>
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

export default ApiTest