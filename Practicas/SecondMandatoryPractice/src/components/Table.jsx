import React from "react";

function Table({netIncome}) {
  return (
    <table style={{padding:"2rem", margin:"auto", fontSize:"1.7rem"}}>

      <thead>
        <tr>
          <th>{netIncome.brand}</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>${netIncome.income}</td>
        </tr>
      </tbody>

    </table>
  );
}

export default Table;
