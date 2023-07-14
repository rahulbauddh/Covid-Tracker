import React, { useEffect, useState } from 'react'
import '../components/covid.css';
import ActiveCases from './active';
import LastUpdated from './lastUpdated';
import TotalDeath from '../death';
import TotalConfirmed from './confirmed';
import TotalRecovered from './recovered';

const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
            <h1 className='mainHeading'>🔴LIVE COVID TRACKER</h1>
            <div className="container">
                <div className='subContainerOne'>
                    <div>
                        <div className="card">
                            <div className="cardHeading">
                                <div className="cardDetails">
                                    <p className="cardName"><span className='spanStyling'>OUR</span>COUNTRY</p>
                                    <p className="cardTotal">INDIA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <TotalRecovered />
                    </div>

                    <div>
                        <TotalConfirmed />
                    </div>

                </div>
                <div className='subContainerTwo'>
                    <div>
                        <TotalDeath />
                    </div>

                    <div>
                        <ActiveCases />
                    </div>

                    <div>
                        <LastUpdated />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Covid