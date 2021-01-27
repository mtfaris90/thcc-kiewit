import React from "react";
import EmployeeList from "./EmployeeList";
import Search from "./Search";
import Filter from "./Filter";
import employee_data from "./data";

function App() {
  return (
    <div className="app">
        <header>Employee List</header>
      <Search />
      <Filter data={employee_data}/>
      <EmployeeList data={employee_data}/>
    </div>
  );
}
export default App;
