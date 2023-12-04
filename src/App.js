import "./App.css";
import { Header } from "./Components/Header";
import { Cards } from "./Components/Cards";
import { data } from "./data";
import { SideBar } from "./Components/SideBar";
import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { DescriptionPage } from "./Components/DescriptionPage";
import { Nav } from "./Components/Nav";
function App() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const record = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / dataPerPage);
  const num = [...Array(npage + 1).keys()].slice(1);
  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changePage = (id) => {
    setCurrentPage(id);
  };

  return (
    <div>
      <Header search={search} setSearch={setSearch}></Header>
      <div className="content">
        <div className="sidebar">
          <SideBar setSearch={setSearch} search={search}></SideBar>
        </div>
        <div className="cardss">
          {record
            .filter((e) =>
              search === ""
                ? e
                : e.location.toLowerCase() === search.toLowerCase()
            )
             
            .map((e) => {
              return (
                <div key={e.id}>
                  {console.log(e.descrption)}
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Cards
                          logo={e.logo}
                          name={e.name}
                          title={e.jobtitle}
                          data={data}
                          e={e}
                        ></Cards>
                      }
                    />
                  </Routes>
                </div>
              );
            })}       
        </div> 
        <Routes>
            <Route
                      exact
                      path="/desc"
                      element={
                        <DescriptionPage ></DescriptionPage>
                      }
                    />
                  
            </Routes>  
      </div>
      <div>
      <Nav nextPage={nextPage} prevPage={prevPage} changePage={changePage} num={num}></Nav>
      </div>
    </div>
  );
}

export default App;
