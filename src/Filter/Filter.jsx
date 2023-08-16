import React from "react";
import Species from "./Category/Species";
import Status from "./Category/Status";
import Gender from "./Category/Gender";

const Filter = ({status, pageNumber, setGender, setSpecie, setStatus, setPageNumber}) => {

    const handlerClickClear = () => {
        setGender("")
        setSpecie("")
        setStatus("")
        setPageNumber(1)
        window.location.reload(false)
    }

    return (
        <div className="col-lg-3 col-12 mb-5">
            <div className="text-center fw-bold fs-4 mb-2">
                Filters
            </div>

            <div 
                className="text-primary text-decoration-underline text-center mb-3"
                style={{ cursor: "pointer" }} 
                onClick={handlerClickClear}
            >Clear Filters
            </div>
            <div className="accordion" id="accordionExample">
                <Status
                    setStatus={setStatus}
                    setPageNumber={setPageNumber}
                />
                <Species
                    setSpecie={setSpecie}
                    setPageNumber={setPageNumber}
                />
               <Gender
                    setGender={setGender}
                    setPageNumber={setPageNumber}
                />
            </div>
        </div>
    )
}

export default Filter