import { useParams } from 'next/navigation';
import React from 'react';
import { useEffect, useState } from 'react';

const countryDetails = () => {
    const [country, setCountry] = useState({});
    const countryName = useParams();
    useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${countryName?.countryName}`)
            .then(res => res.json())
            .then(data => setCountry(data))

    }, [country])
    return (
        <div className='container my-4'>
            <div className='row'>
                {
                    <div className='col-md-4'>
                        <div className="card">
                            <h5 className="card-title text-center">{country[0]?.name}</h5>
                            <img className="img-fluid" src={country[0]?.flags.svg} style={{ height: "255px" }} alt="Card image cap" />
                            <div className="card-body">
                                <p className='card-text text-left'>Country region: {country[0]?.region}</p>
                                <p className='card-text text-left'>Country subregion: {country[0]?.subregion}</p>
                                <p className='card-text text-left'>Country area: {country[0]?.area}</p>
                                <p className='card-text text-left'>Country population: {country[0]?.population}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default countryDetails;