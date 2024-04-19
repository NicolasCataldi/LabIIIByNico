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
      <div style={{ display: "flex", padding: "20px" }}>
        {netIncomes.map((netIncome) => ( <Table netIncome={netIncome} netIncomes={netIncomes}/>
        ))}
      </div>
      <p style={{textAlign: "center", padding: "2rem", margin: "auto", fontSize: "1.7rem" }}>
        Total income: ${netIncomes.reduce((accumulator, nextElement) => accumulator + nextElement.income,0)}</p>
    </>
  );
}

export default App;
