import { useEffect, useState } from 'react';
import './Work.css';
import Search from '../../assets/work-img/search.png'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e4a5f028emshec95c7054005c1dp16e466jsn8f621993560a',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

export default function Weather() {
    const [data, setData] = useState();
    const [city, setCity] = useState<string>('Iasi');
    const [count, setCount] = useState<number>(1)

    // useEffect(() => {
    //     fetch(`https://open-weather13.p.rapidapi.com/city/${city}`,options)
    //     .then(res => res.json())
    //     .then(dat => setData(dat))
    // },[count])

    useEffect(() => {
        console.log(data)
    },[data])

  return (
    <div className="weather-div w-[60%] h-[90%] flex items-center">
        <div className="wea-search flex items-center justify-center gap-[1rem]">
            <input type="text" placeholder='Search city' value={city} onChange={(e) => setCity(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}><img src={Search} /></button>
        </div>
        <div className="wea-mid">
            <p>{data && data['name']}</p>
            <p>{data && ((data['main']['temp'] - 32) * (5/9)).toFixed(2)}°</p>
            <p>{data && data['weather'][0]['main']}</p>
        </div>
        <div className="wea-down flex justify-center items-center">
            <div className="wea-h">
                <p>{data && data['main']['humidity']}%</p>
                <p>Humidity</p>
            </div>
            <div className="wea-r">
                <p>{data && data['main']['pressure']} hPa</p>
                <p>Pressure</p>
            </div>
            <div className="wea-w">
                <p>{data && data['wind']['speed']} km/h</p>
                <p>Wind</p>
            </div>
        </div>
    </div>
  )
}
