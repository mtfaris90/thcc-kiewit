import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import Search from "./Search";
import Filter from "./Filter";

const App = () => {
  const [selection, setSelection] = useState("");
  const [dept, setDept] = useState("all");
  const [age, setAge] = useState("all");
  return (
    <div className="app">
      <header>Employee List</header>
      <Search selection={selection} setSelection={setSelection} />
      <Filter age={age} setAge={setAge} dept={dept} setDept={setDept} />
      <EmployeeList selection={selection} dept={dept} age={age} />
    </div>
  );
};
export default App;
