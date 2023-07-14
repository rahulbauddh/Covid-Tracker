import React, { useEffect, useState } from 'react'

const TotalConfirmed = () => {
    const [data, setData] = useState([]);
    const totalConfirmedData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualConfirmedData = await res.json();
        setData(actualConfirmedData.statewise[0]);
    }
    useEffect(() => {
        totalConfirmedData();
    },[])

    return (
        <>
            <div className="card">
                <div className="cardHeading">
                    <div className="cardDetails">
                        <p className="cardName"><span className='spanStyling'>Total </span>CONFIRMED</p>
                        <p className="cardTotal">{data.confirmed}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalConfirmed