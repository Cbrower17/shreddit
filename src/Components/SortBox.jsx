import { useState } from "react";
export default function FilterBox({setSort}) {

            function handleChange(topic){
              setSort(topic)
            }
  return (
    <div className="form-control">
      <div className="input-group">
        <select className="select select-bordered" onChange={(e)=>handleChange(e.target.value)}>
          <option  value={"old"}>
            Oldest -{">"} Newest
          </option>
          <option  value={"new"}>
            New
          </option>
          <option  value={"hot"}>
            Hot
          </option>
        </select>
        <button className="btn">Filter</button>
      </div>
    </div>
  );
}