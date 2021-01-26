import React from "react";

const Employee = ({ name, dept, age }) => {
  return (
    <div className="employee">
      {name}<br/>
      {dept}<br/>
      {age}<br/>
    </div>
  );
};

export default Employee;
