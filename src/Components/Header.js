import React from 'react'

export const Header = ({search,setSearch}) => {
  return (
    <div className='Main-header'>
        <h1>Github <span> Jobs</span></h1>
        <div className='Main-search' >
            <input id='search-field' type='text' value={search} onChange={(e)=>setSearch(e.target.value)}placeholder='Title, companies, expertise or benefits' />
            <button>Search</button>
        </div>
        
    </div>
  )
}
