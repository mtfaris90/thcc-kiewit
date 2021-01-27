import React, { useEffect, useState } from "react";
import Employee from "./Employee";

const EmployeeList = ({ data, selection, dept, age }) => {
  const [list, setList] = useState(data);
  useEffect(() => {
    const newList = data.filter((datum) =>
      datum.name.toLowerCase().includes(selection)
    );
    setList(newList);
  }, [selection]);
  useEffect(() => {
    if (dept !== "all") {
      const newList = data.filter(
        (datum) => datum.department.toLowerCase() === dept
      );
      setList(newList);
    }
  }, [dept]);
  useEffect(() => {
    if (age === "u30") {
      const newList = data.filter((datum) => {
        return datum.age < 30;
      });
      setList(newList);
    } else if (age === "u40") {
      const newList = data.filter((datum) => {
        return datum.age >= 30 && datum.age < 40;
      });
      setList(newList);
    } else if (age === "40o") {
      const newList = data.filter((datum) => {
        return datum.age >= 40;
      });
      setList(newList);
    }
  }, [age]);

  return (
    <div className="list">
      {list.map((employee, i) => (
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
