import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css"

const Pagination = ({info, pageNumber, setPageNumber}) => {
    const handlerPageChange = (data) => {
        setPageNumber(data.selected + 1)
    }

    const [width, setWidth] = useState(window.innerWidth)
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions)
        return () => window.removeEventListener("resize", updateDimensions);
    }, [])

    return (
        <ReactPaginate
            className="pagination justify-content-center my-4 gap-4"
            breakLabel="..."
            nextLabel="Next"
            previousLabel="Prev"
            previousClassName="btn btn-primary fs-5 prev"
            nextClassName="btn btn-primary fs-5 next"
            activeClassName="active"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            forcePage={pageNumber === 1 ? 0 : pageNumber -1}
            marginPagesDisplayed={width < 576 ? 1 : 2}
            pageRangeDisplayed={width <576 ? 1 : 2}
            onPageChange={handlerPageChange}
            pageCount={info?.pages} // el operador ?. se utiliza para manejar casos en los que info podría ser null o undefined, evitando errores si intentas acceder a una propiedad en un objeto nulo o indefinido

      />
    )
}

export default Pagination