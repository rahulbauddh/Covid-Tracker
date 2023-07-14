import React, { useEffect, useState } from 'react';

const TotalRecovered = () => {
    const[data, setData] = useState([]);
    const getRecoveredData = async () =>{
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const recoveredActualData = await res.json();
            setData(recoveredActualData.statewise[0]);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getRecoveredData();
    },[])

    return (
        <>
            <div className="card">
                <div className="cardHeading">
                    <div className="cardDetails">
                        <p className="cardName"><span className='spanStyling'>Total </span>RECOVERED</p>
                        <p className="cardTotal">{data.recovered}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalRecovered