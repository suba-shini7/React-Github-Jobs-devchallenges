import React from "react";

export const SideBar = ({search,setSearch}) => {
  return (
    <div>
      <div className="side-bar">
        <form>
          <input type="checkbox" />
          <label>Full Time</label>
          <br />
          <p>Location</p>

          <input
            className="location"
            type="text"
            placeholder="City, state, zip code or country"
            value={search}
          ></input>
          <br></br>
          <div onChange={(e)=>setSearch(e.target.value)}  >
        <input type="radio" value="Bengaluru" name="loc" /> Bengaluru<br/>
        <input type="radio" value="Chennai" name="loc" /> Chennai<br/>
        <input type="radio" value="Comibatore" name="loc" /> Comibatore<br/>
        <input type="radio" value="Mumbai" name="loc"/> Mumbai<br/>
        <input type="radio" value="Thiruvananthapuram" name="loc"/> Thiruvananthapuram<br/>


      </div>
        </form>
      </div>
    </div>
  );
};
