import React, { useEffect, useState } from 'react'

const LastUpdated = () => {

    const [data, setData] = useState([]);
    const lastUpdatedData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualLastUpdatedTime = await res.json();
        setData(actualLastUpdatedTime.statewise[0]);
    }

    useEffect(() => {
        lastUpdatedData();
    },[])

    return (
        <>
            <div className="card">
                <div className="cardHeading">
                    <div className="cardDetails">
                        <p className="cardName"><span className='spanStyling'>Last </span>UPDATED</p>
                        <p className="cardTotal">{data.lastupdatedtime}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LastUpdated