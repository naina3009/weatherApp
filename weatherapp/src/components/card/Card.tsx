import { FC } from "react";
import "./Card.css"

interface ICards{
    address : string
    currentDate ?: string
    temp : number
}

const Cards : FC<ICards> = (props)=>{
    const {address,currentDate,temp} = props
    return(
        <div className="card">
            <div className="container">
                <div className="cloud front">
                    <span className="left-front"></span>
                    <span className="right-front"></span>
                </div>
                <span className="sun sunshine"></span>
                <span className="sun"></span>
                <div className="cloud back">
                    <span className="left-back"></span>
                    <span className="right-back"></span>
                </div>
            </div>

            <div className="card-header">
                <span>{address}</span>
                <span>{currentDate}</span>
            </div>
            <span className="temp">{temp}°</span>
            <div className="temp-scale">
                <span>Celcius</span>
            </div>
        </div>
    )
}
export default Cards