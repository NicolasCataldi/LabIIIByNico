/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from "react";

function Table({ netIncomes }) {
  return (
    <table style={{display:"flex"}}>

      {netIncomes.map((netIncome) =>

        <>
          <thead style={{margin: "auto", fontSize: "1.7rem" }}>
            <tr>
              <th>{netIncome.brand}</th>
            </tr>
          </thead>

          <tbody style={{margin: "auto", fontSize: "1.7rem" }}>
            <tr>
              <td>${netIncome.income}</td>
            </tr>
          </tbody>
        </>

      )}



    </table>
  );
}

export default Table;
