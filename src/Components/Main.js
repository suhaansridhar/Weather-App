import React, {useState} from 'react';
import axios from 'axios';


const Main = () => {
    const [location, setLocation] = useState('');
    const [data, setData] = useState({});
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ca13fd5cad80951f9021aee9c8656c29`;

    

    function sub(){
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
    }

    return (
      <div>
          <input type="text" onChange={event => setLocation(event.target.value)} value={location}/>
          <button onClick={sub}>submit</button>
          {data.main? <h2>{data.main.temp}</h2> : null}
      </div>
    )
}

export default Main
