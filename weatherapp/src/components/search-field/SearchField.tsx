import { FC } from "react";
import "./SearchField.css"


interface ISearchField{
    placeHolder ?: string,
    value: any
    onChange ?: (e:any)=>void
    onClick ?: ()=>void
}
const SearchField : FC<ISearchField> = (props)=>{
    const {value,onChange,onClick,placeHolder} = props
    return(
        
        <form className="form">
            <button>
                <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                    <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
            <input 
                className="input" 
                placeholder={placeHolder}
                required 
                type="text"
                value={value}
                onChange={onChange}
            />
            <button className="reset" type="button" onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path strokeLinecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </form>
         
    )
}
export default SearchField