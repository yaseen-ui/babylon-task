import React, { useEffect, useState } from 'react'

const daysList = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

function Calender({ month, year }) {
    const [days, setdays] = useState();
    const [startDay, setStartDay] = useState('');
    const [calanderList, setCalanderList] = useState([]);

    useEffect(() => {
        setdays(new Date(year, month, 0).getDate());
        setStartDay(new Date(`${month}/1/${year}`).getDay());
    }, [year, month])

    useEffect(()=>{
        const tableData = [];
        let lastIndex = startDay;
        let weekObj = {};
        for (let index = 0; index < days; index++) {
            weekObj[daysList[lastIndex]] = index+1;
            lastIndex++;
            if(lastIndex > 6) {
                lastIndex = 0;
                tableData.push(weekObj);
                weekObj = {};
            } 
            if(index === days - 1) {
                if(Object.keys(weekObj).length){
                    tableData.push(weekObj);
                }
            }
        }
        setCalanderList(tableData);
    },[days, startDay])

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        {
                            daysList.map(ele => <th key={ele}>{ele}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                        {
                            calanderList.map((row,index)=>{
                                return <tr key={index}>
                                    {
                                        daysList.map(ele=> <td key={index+ele}>{row[ele]}</td>)
                                    }
                                </tr>
                            })
                        }
                </tbody>
            </table>
        </div>
    )
}

export default Calender