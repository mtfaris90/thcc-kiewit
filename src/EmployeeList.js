import React from "react";
import Employee from "./Employee";

const EmployeeList = ({data}) => {
  return (
    <div className="list">
      {data.map((employee, i) => <Employee key={i} name={employee.name} dept={employee.department} age={employee.age} />)}
    </div>
  )
}

export default EmployeeList;