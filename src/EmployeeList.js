import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import employee_data from "./data";

const EmployeeList = ({ selection, dept, age }) => {
  const [employees, setEmployees] = useState(employee_data);
  useEffect(() => {
    setEmployees(employee_data);
    if (selection !== "") {
      setEmployees(
        employees.filter((item) =>
          item.name.toLowerCase().includes(selection.toLowerCase())
        )
      );
    }
    if (dept !== "all") {
      setEmployees(
        employees.filter((item) => item.department.toLowerCase() === dept)
      );
    }
    if (age !== "all") {
      if (age === "u30") {
        setEmployees(employees.filter((item) => item.age < 30));
      } else if (age === "u40") {
        setEmployees(
          employees.filter((item) => item.age >= 30 && item.age <= 40)
        );
      } else if (age === "o40") {
        setEmployees(employees.filter((item) => item.age >= 40));
      }
    }
  }, [selection, dept, age]);
  return (
    <div className="list">
      {employees.map((employee, i) => (
        <Employee
          key={i}
          name={employee.name}
          dept={employee.department}
          age={employee.age}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
