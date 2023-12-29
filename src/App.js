import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(countries);

  return (
    <div className='container'>
      {countries.map((country, key) => (
        <div key={key}>
          <div className='country'>
            <div className='image'>
              <img src={country.flags.png} alt='flags' />
            </div>
            <div className='country-details'>
              <h3>Name : {country.name.common}</h3>
              <p>Official: {country.name.official}</p>
              <p>Capital : {country.capital}</p>
              <p>Region : {country.region}</p>
              <p>Status : {country.status}</p>
              <p>Subregion : {country.subregion}</p>
              <p>Area : {country.area}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
