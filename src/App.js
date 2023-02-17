import Header from "./components/Header";
import CountryList from "./components/CountryList";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ReactDOM from "react-dom";
import Country from "./components/Country";
function App() {
  const [countries, setCountries] = useState([]);
  const [countries1, setCountries1] = useState([]);

  //this always calls by default
  useEffect(() => {
    const getCountries = async () => {
      const countriesfromApi = await fetchCountries();
      setCountries(countriesfromApi);
      setCountries1(countriesfromApi);
    };
    getCountries();
  }, []);

  //Api fetch method
  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
  };
  //Pagination function
  const itemsPerPage = 5;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  //console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = countries.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(countries.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % countries.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  //Search function
  const filterCountries = () => {
    //const countriesfromApi2 = await fetchCountries(); <via fetch method>

    let filtertext = document.getElementById("txtsearch").value.toLowerCase();
    const filtered = countries1.filter((a) =>
      a.name.common.toLowerCase().includes(filtertext)
    );
    setCountries(filtered);
    //console.log(filtertext);
  };
  return (
    <Router>
      <Header filterCountry={filterCountries} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <CountryList countries={currentItems} />
              <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
            </>
          }
        />

        <Route path="/country/:name" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
