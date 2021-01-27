import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import Search from "./Search";
import Filter from "./Filter";
import employee_data from "./data";

const App = () => {
  const [selection, setSelection] = useState("");
  const [dept, setDept] = useState("all");
  const [age, setAge] = useState("all");
  return (
    <div className="app">
      <header>Employee List</header>
      <Search selection={selection} setSelection={setSelection} />
      <Filter setAge={setAge} setDept={setDept} data={employee_data} />
      <EmployeeList
        data={employee_data}
        selection={selection}
        dept={dept}
        age={age}
      />
    </div>
  );
};
export default App;
