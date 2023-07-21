
import "bootstrap/dist/css/bootstrap.min.css";
import Calender from "./Calender";
import Header from "./Header";
import './App.css';
import { useState } from "react";

function App() {
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState(7);

  const changeYear = (value) => {
    setYear(value);
  }
  
  const changeMonth = (value) => {
    setMonth(value);
  }
  
  return (
    <div className="App">
      <Header inputValue={year} changeMonth={changeMonth} month={month} changeYear={changeYear}/>
      <Calender month={month} year={year} />
    </div>
  );
}

export default App;
