import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'



const apikey = import.meta.env.VITE_WEATHER_API_KEY;

function App() {



  const[city , setCity]=useState('cairo');
  const[weather , setWeather]=useState(null);
  const[forecast , setForecast]=useState([])
  const[loading , setLoading]=useState(false)


  const fetchWeather= async ()=>{
     setLoading(true)

     try{
      const[weatherRes , forecastRes] =  await Promise.all([
        axios.get('https://api.openweathermap.org/data/2.5/weather' , {
          params:{
            q : city , 
            appid : apikey,
            units : 'metric'
          }
        })
      ,
        axios.get('https://api.openweathermap.org/data/2.5/forecast' , {
          params:{
            q : city,
            appid:apikey,
            units : 'metric'
          }
        })
      ]
    )
          
      setWeather(weatherRes.data);
      // console.log(weatherRes)

      // console.log(forecastRes)

      setForecast(forecastRes.data.list.filter((item) => item.dt_txt.includes("12:00:00")).slice(0,3))
      


     }
     catch(error){
      console.log(error)
     }
     finally{
      setLoading(false)
     }
  }

  useEffect(()=>{
    fetchWeather();
  },[city])


  return (
    <>
    <div className='text-center my-4'>
      <h2 className='my-4'>🌤️ Weather Dashboard</h2>
      <input
      type="text"
      className='w-75 form-control mx-auto'
      placeholder='Enter City Name'
      value={city}
      onChange={(e)=> setCity(e.target.value)}
      />
      </div>


      { loading ? 
      (
        <div className='text-center'>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
          <p>loading Data ....</p>
        </div>
      ): weather ? 
      (
        <div className='text-center'>
          <div  className="card mx-auto mb-4" style={{ maxWidth: '400px' }}>
            <h5 className='mt-2'>{weather.name}</h5>
            <p> 🌡️  temp: {weather.main.temp} °C </p>
            <p> 💧 Humidity: {weather.main.humidity }%</p>
            <p> 💨Wind: {weather.wind.speed} m/s</p> 

          </div>
          
          <div className='container'>
          <h3 className='m-4'>3-Day Forecast</h3>
           <div className='row'>
             {forecast.map((item) =>(
             <div className=' col-md-4 mb-3 ' key={item.dt}>
                <div className="card text-center">
                  <div className='card-body'>
                    <h5>{item?.dt_txt.split(' ')[0]}</h5>
                    <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}  alt="" />
                    <p> {item.weather[0].description} </p>
                    <p> 🌡️ {item.main.temp} °C </p> 
                  </div>
                </div>
              </div>
             ))}
           </div>
          </div>
        </div>
      ):(
      <h2 className='text-center text-danger' > No Weather Data Available </h2>
      )
    }
    </>
  ) 
}

export default App
