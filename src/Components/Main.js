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
            console.log(response.data)
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
                <h3>{data.name}</h3>
                <div className="weather--temperature">{data.main? data.main.temp : null}*</div>
                <div className="high--low">H:{data.main? data.main.temp_max : null} L:{data.main? data.main.temp_min : null}</div>
            </div>
        </div>
      </div>
    )
}

export default Main
