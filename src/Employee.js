import React from "react";

const Employee = ({ name, dept, age }) => {
  return (
    <div>
      {name}<br/>
      {dept}<br/>
      {age}<br/>
    </div>
  );
};

export default Employee;
