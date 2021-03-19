import React, { useState } from 'react'
import './SearchInput.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchInput(props:SearchInputProps){
    const [value, setValue] = useState('')

    const onSearch = () => {
        props.onSearch(value)
    }

    const onInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleKeyPress = (event:React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            onSearch()
        }
    }

    return (
        <div className="search-bar d-flex" style={{width:props.width}}>
            <input type="text" className="search-bar__input p-10" name="search" placeholder={props.label} value={value} onChange={onInputChange} onKeyPress = {(e) => {handleKeyPress(e)}}></input>
            <button className="search-bar__button button button--primary p-10" onClick = {onSearch}>
                <FontAwesomeIcon className="search-bar__icon" icon={faSearch}></FontAwesomeIcon>
            </button>
        </div>
    )
}

export interface SearchInputProps{
    label:string,
    onSearch:Function,
    width:string
}

export default SearchInput