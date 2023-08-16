import React from "react";
import styles from "./Search.module.scss"

const Search = ({setSearch, setPageNumber}) => {

    const handleSearch = (event) => {
        event.preventDefault()
    }

    const handleInput = (event) => {
        setPageNumber(1)
        setSearch(event.target.value)
    }

    return (
       <form className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}>
            <input 
                onChange={handleInput}
                type="search" 
                className={styles.input} 
                placeholder= "Search for characters"
            />
            <button                 
                type="submit"
                onClick={handleSearch}
                className= {`${styles.btn} btn btn-primary fs-5`}
            >Search</button>
       </form> 
    )
    
}

export default Search