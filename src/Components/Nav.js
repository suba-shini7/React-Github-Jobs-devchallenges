import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


export const Nav = ({nextPage,prevPage,changePage,num,currentPage}) => {
  return (
   
    <nav>
    <ul className="pagination"> 
      <li className="page-item"> 
      <a href="#" onClick={prevPage} className="page-link">Prev</a>
      </li>
      {
       num.map((n,i)=>(
        <li key={i} className={`page-item ${currentPage=== n? 'active' :''}`}>
           <a href="#" className="page-link" onClick={()=>changePage(n)}>{n}</a>
        </li>
       ))
      }
      <li className="page-item"> 
      <a href="#" className="page-link" onClick={nextPage}>Next</a>
      </li>
    </ul>
    </nav>
    
  )
}
