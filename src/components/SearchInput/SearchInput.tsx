import React, { useState } from 'react'
import './SearchInput.css'
function SearchInput(props:SearchInputProps){
    const [value, setValue] = useState('')

    const onSearch = () => {
        props.onSearch(value)
    }

    const onInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <div className="search-bar d-flex" style={{width:props.width}}>
            <input type="text" className="search-bar__input p-10" name="search" placeholder={props.label} value={value} onChange={onInputChange}></input>
            <button className="search-bar__button button button__theme__primary p-10" onClick = {onSearch}>search</button>
        </div>
    )
}

export interface SearchInputProps{
    label:string,
    onSearch:Function,
    width:string
}

export default SearchInput