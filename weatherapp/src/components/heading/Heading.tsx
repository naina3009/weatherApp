import { FC } from "react";
import "./Heading.css"

interface IHeading{
    label : string
}

const Heading : FC<IHeading> = (props)=>{
    const {label} = props
    return(
      
    <div className="checkbox">
        <input id="checkbox1" className="checkbox__input" type="checkbox"/>
        <label htmlFor="checkbox1" className="checkbox__label">
            <span className="checkbox__custom"></span>
          {label}
        </label>
    </div>

    )
}
export default Heading