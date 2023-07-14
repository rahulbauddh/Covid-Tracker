import React, { useEffect, useState } from 'react'

const TotalDeath = () => {

    const [data, setData] = useState([]);
    const totalDeathData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualDeathData = await res.json();
        setData(actualDeathData.statewise[0]);
    }
    useEffect(() => {
        totalDeathData();
    },[])

    return (
        <>
            <div className="card">
                <div className="cardHeading">
                    <div className="cardDetails">
                        <p className="cardName"><span className='spanStyling'>Total </span>DEATH</p>
                        <p className="cardTotal">{data.deaths}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalDeath