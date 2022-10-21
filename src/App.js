import { useState } from "react";
import Employee from "./components/Employee";
import data from "./helper/data";
import "./App.css"

const App = () => {
  console.log(data)
  const [listindex, setListindex] = useState(0);

  const employee = data[listindex]
  console.log(employee);

  const backClick = () => {
    if (listindex > 0) {
      setListindex(listindex-1)
    }
    
  }
  const nextClick = () => {
    if (listindex < data.length-1) {
      setListindex(listindex+1)
    }
    
  }

 console.log(listindex);



  return (
    <div className="text-center all">
      <h1>Employee List</h1>
      <h6>Employee {listindex +1} </h6>

      <Employee key={listindex} {...employee} />


      <div className="last d-flex justify-content-center">
        <button onClick={backClick} type="button" className="btn btn-danger btn-lg m-1 p-3">
          Back
        </button>
        <button onClick={nextClick} type="button" className="btn btn-success btn-lg m-1 p-3">
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
