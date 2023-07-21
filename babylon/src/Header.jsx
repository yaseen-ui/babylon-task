import React, {useEffect, useState} from 'react';

const yearsLimit = {start: 2020, end: 2030}; // the limit can be fetched from api
const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function Header(props) {
    const [years, setYears] = useState([]);
    const [currentYear, setCurrentYear] = useState('');
    const [currentMonth, setCurrentMonth] = useState();

    useEffect(()=>{
        const tempYears = [];
        for (let index = yearsLimit.start; index <= yearsLimit.end; index++){
            tempYears.push(index);
        }
        setYears(tempYears);
        setCurrentYear(props.inputValue);
    }, [props.inputValue]);
    
    useEffect(()=>{
        setCurrentMonth(props.month);
    }, [props.month]);


    const handleYearChange = (e) => {
        setCurrentYear(e.target.value);
        props.changeYear(e.target.value);
    }

    const handleMonthChange = (increment) => {
        let curMonth = currentMonth;
        if(increment) {
            curMonth++;
        } else {
            curMonth--;
        }
        setCurrentMonth(curMonth);
        props.changeMonth(curMonth);
    }

    const jumpToMonth = (e) => {
        setCurrentMonth(e.target.value);
        props.changeMonth(e.target.value);
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark">
            <div className="container-fluid">
                <span className="navbar-brand" href="#">Babylon</span>
            </div>
            <li className='nav-item dd-item'>
                <select value={currentYear} className="form-control" onChange={handleYearChange}>
                    {
                        years.map(ele=> <option value={ele} key={ele}>{ele}</option>)
                    }
                </select>
            </li>
            <li className='nav-item dd-item'>
                <select value={currentMonth} className="form-control" onChange={jumpToMonth}>
                    {
                        monthsList.map((ele,index)=> <option value={index+1} key={ele}>{ele}</option>)
                    }
                </select>
            </li>
            <li className='nav-item'>
                <button disabled={currentMonth < 2} onClick={() => handleMonthChange(false)} className='btn btn-primary'> &#60; </button>
            </li>
            <li className='nav-item'>
                <button disabled={currentMonth > 11} onClick={()=> handleMonthChange(true)} className='btn btn-primary'> &#62; </button>
            </li>
            </nav>
        </>
    )
}

export default Header