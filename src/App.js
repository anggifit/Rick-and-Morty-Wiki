import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./Card/Card";
import Search from "./Search/Search";
import Pagination from "./Pagination/Pagination";
import Filter from "./Filter/Filter";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import Navbar from "./Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      </div>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  )
}

const Home = () => {
    const [fetchedData, setFetchedData] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [search, setSearch] = useState("")
    const [gender, setGender] = useState("")
    const [specie, setSpecie] = useState("")
    const [status, setStatus] = useState("")

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&gender=${gender}&specie=${specie}&status=${status}`
    
    useEffect(() => {
      fetch(api)
      .then(response => response.json())
      .then(data => setFetchedData(data))
    }, [api])
    
    let {info, results} = fetchedData
    
  return (
    <div className="App">

        <Search 
          setSearch={setSearch} 
          setPageNumber={setPageNumber}
        />
          <div className="container">
          <div className="row">
              <Filter
                status={status}
                pageNumber={pageNumber}
                //porque solo con status y no con los demas? xq con pagenumber
                setGender={setGender}
                setSpecie={setSpecie}
                setStatus={setStatus}
                setPageNumber={setPageNumber}
              />
            <div className="col-lg-8 col-12">
              <div className="row">
                  <Card 
                    results={results}
                  />
              </div>
            </div>
          </div>
          </div>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
    </div>
  );
}

export default App;
