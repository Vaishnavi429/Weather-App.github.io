import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Container.css"
import { FaStreetView } from "react-icons/fa";


export default function Container() {
    let key = '506447028c17e60964889b5e5f9ccc4d'
    let [City, setCity] = useState(null);
    let [Search, setSearch] = useState('Varanasi')


    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=506447028c17e60964889b5e5f9ccc4d`
            const response = await fetch(url);
            const result = await response.json();
            setCity(result.main)
        }
        fetchApi();
    })


    return (
        <div>
            <div className='Container'>
                <div className='header'>
                    
                    <img className='image1' src="https://www.clipartmax.com/png/full/66-662505_weather-clipart-png-weather-clipart-png.png" alt="" />
                    <input type="search" className='searchBar' placeholder='Enter your city.....' value={Search} onChange={(event) => (setSearch(event.target.value))} />
                </div>
                {!City ? (
                <p>Data not Found</p>
                )  : (
                        <div className='info'>
                            <h2>{Search.toUpperCase()}</h2>
                            <h1>{City.temp}<sup>o</sup>Cel</h1>
                            <div className='streeticon'> <FaStreetView/></div>
                            <h3>{City.temp_min}<sup>o</sup>Cel | {City.temp_max}<sup>o</sup>Cel</h3>
                            <h4>Weather App</h4>
                        </div>
                     )}

            </div>
        </div>
    )
}
