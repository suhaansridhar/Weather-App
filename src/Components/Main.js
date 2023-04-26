import React, {useState} from 'react';
import axios from 'axios';
import {AiOutlineSearch} from 'react-icons/ai';


const Main = () => {
    const [location, setLocation] = useState('');
    const [data, setData] = useState({});
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ca13fd5cad80951f9021aee9c8656c29`;

    

    function search(){
        axios.get(url).then((response) => {
            setData(response.data)
        })
    }

    // <input type="text" onChange={event => setLocation(event.target.value)} value={location}/>
    //       <button onClick={sub}>submit</button>
    //       {data.main? <h2>{data.main.temp}</h2> : null}

    return (
      <div className='main--container'>
        <div className="main--container--inner">
            <div className="search--container">
                <input type="text" value={location} onChange={event => setLocation(event.target.value)}/>
                <button onClick={search}><AiOutlineSearch /></button>
            </div>
            <div className="inner--container--1">
                <div className="weather--location--name">{data.name}</div>
                <div className="weather--temperature">{data.main? data.main.temp : null}*</div>
                <div className="high--low">H:{data.main? data.main.temp_max : null} L:{data.main? data.main.temp_min : null}</div>
            </div>
            <div className="inner--container--2">
                <div className="inner--container--2--child">Humidity: {data.main? data.main.humidity : null}</div><hr />
                <div className="inner--container--2--child">Visibility: {data.visibility? data.visibility : null}</div><hr />
                <div className="inner--container--2--child">Pressure: {data.main? data.main.pressure : null}</div>
            </div>
        </div>
        <h2>* for degrees</h2>
      </div>
    )
}

export default Main
