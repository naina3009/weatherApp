import { FC, useEffect, useState } from "react";
import Cards from "../../components/card/Card";
import Heading from "../../components/heading/Heading";
import SearchField from "../../components/search-field/SearchField";
import "./Weather.css"
import { WEATHER_API_KEY } from "../../environment";



const Weather : FC = ()=>{

    const [data,setData] = useState<any>("")
    const [city,setCity]= useState<string>("Noida")
    const fetchData = async()=>{
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`)
            const result = await response.json();
            setData(result)

        }catch(ex:any){
            console.log(ex)
        }
    }

    useEffect(()=>{
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[city])

    const handleClear= ()=>{
        setCity("")
    }

    const timestamp = data.dt; 
    const date = new Date(timestamp * 1000); 

    return(
        <div className="main">
            <Heading  label={"Weather App"} />
            <SearchField 
                value={city}
                onChange={(event) =>  setCity(event.target.value)} 
                onClick={handleClear} 
                placeHolder="Enter City Name..."
            />
            <Cards
                address={data?.name}
                temp={Math.floor(data?.main?.temp-273.15) || 0}
                currentDate={date.toString()}
            />
        </div>
    )
}
export default Weather