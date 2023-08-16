import React from "react";
import "./FilterBTN.css"


const FilterBTN = ({name, index, input, task, setPageNumber}) => {
    const handleFilterCategory = () => {
        task(input)
        setPageNumber(1)
    } //este handler no lo entiendo
    
    return (
        <div className="form-check">
            <input
                className="form-check-input x"
                type="radio"
                name={name}
                id={`${name}-${index}`}
                
                />
            <label
                className="btn btn-outline-primary"
                for={`${name}-${index}`}
                onClick={handleFilterCategory}
            >{input}
            </label>
        </div>
    )
}

export default FilterBTN