import React, { useEffect, useState } from 'react'

const ActiveCases = () => {
    const [data, setData] = useState([]);

    const totalActiveData = async () =>{
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualActiveCasesData = await res.json();
        setData(actualActiveCasesData.statewise[0]);
    }

    useEffect(()=>{
        totalActiveData();
    },[])

    return (
        <>
            <div className="card">
                <div className="cardHeading">
                    <div className="cardDetails">
                        <p className="cardName"><span className='spanStyling'>Total </span>ACTIVE</p>
                        <p className="cardTotal">{data.active}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActiveCases