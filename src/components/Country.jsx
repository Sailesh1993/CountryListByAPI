
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


function Country() {
    const { name } = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const getCountry = async () => {
            const countryData = await fetchCountryData();
            setCountry(countryData);
        };
        getCountry();
        document.getElementById('txtsearch').style.display = "none"
    });
    const fetchCountryData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/name/" + name);
        const data = await response.json();
        return data;
    };


    return (

        <>
            {country.map((item, index) => (
                <div>
                    <div className="row">
                        <div className='p-2 m-3'>
                            <Link to="/">    <button className="btn btn-primary btn-custom">Home</button>
                            </Link>
                        </div>                    </div>

                    <div className="row p-3">

                        <div className="col-md-6 p-2">
                            <div className="row">

                                <div className="col-6">
                                    <span className="rounded-circle bg-primary p-2" style={{ float: "right", width: "60px", height: "60px", display: "inline-block" }}>
                                        <h2 className="text-center">{item.name.common[0]}
                                        </h2>
                                    </span>

                                </div>
                                <div className="col-6 float-left px-0">
                                    <h3 className="my-0">{item.name.common.toUpperCase()}</h3>
                                    <p>{item.capital}</p>
                                </div>
                            </div>

                            <div className="row text-center my-4">
                                <div className="col-12">
                                    <img src={item.flags.png} style={{ width: "60%" }} className="flagImage"></img>

                                </div>
                            </div>


                        </div>
                        <div className="col-md-6 p-2">
                            <p className="fs-4 p-4">
                                The country belongs to <b>{item.region}</b> region and {item.subregion} sub-region.
                                Located at {item.latlng[0]}N and {item.latlng[1]}W,
                                this country has population of {item.population} and it has gained the independent, according to the CIA World Factbook.
                            </p>
                            <p className="fs-4 px-4">
                                Official Name: <b>{item.name.official}</b>
                            </p>
                            <p className="fs-4 px-4">
                                Map: <b><a href={item.maps.googleMaps} target="_blank">Check Map</a></b>
                            </p>
                        </div>
                    </div>

                </div>


            ))
            }

        </>

    )
}

export default Country