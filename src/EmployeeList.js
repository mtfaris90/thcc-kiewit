import React from "react";
import employee_data from "./data";
import Employee from "./Employee";

const EmployeeList = () => {
  return (
    <div>Employee List
      {employee_data.map((employee) => <Employee name={employee.name} dept={employee.department} age={employee.age} />)}
    </div>
  )
}

export default EmployeeList;