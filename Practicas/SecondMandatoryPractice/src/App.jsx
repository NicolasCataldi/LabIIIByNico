/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  return (
    <>
      <Table netIncomes={netIncomes}/>
      <p style={{textAlign: "center", padding: "2rem", margin: "auto", fontSize: "1.7rem" }}>
        Total income: ${netIncomes.reduce((accumulator, nextElement) => accumulator + nextElement.income,0)}</p>
    </>
  );
}

export default App;
