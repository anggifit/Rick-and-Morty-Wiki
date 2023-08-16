import React from "react";
import FilterBTN from "../FilterBTN";

const Species = ({setSpecie,setPageNumber}) => {
    let speciesType = ["Human", "Alien", "Humanoid",
    "Poopybutthole", "Mythological", "Unknown",
    "Animal", "Disease","Robot","Cronenberg","Planet"]

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseTwo"
                    aria-expanded="false" 
                    aria-controls="collapseTwo"
                >
                    Species
                </button>
            </h2>
            <div 
                id="collapseTwo" 
                className="accordion-collapse collapse" 
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {speciesType.map((item, index) => (
                            <FilterBTN
                                key={index}
                                index={index}
                                name="Species"
                                input={item}
                                task={setSpecie} 
                                setPageNumber={setPageNumber}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Species