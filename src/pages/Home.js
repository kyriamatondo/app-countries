import React, { useEffect, useState } from "react";
import Countries from "../components/Countries";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const[selectRadio, setSelectRadio]=useState("")
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"]

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries mt-3">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultChecked={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent)=>(
          <li>
           <input type="radio" id={continent} name="continentRadio" onChange={(e)=>setSelectRadio(e.target.id)} 
           checked={continent===selectRadio}/>
           <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
       
      </ul>
      {selectRadio && <button onClick={()=>setSelectRadio("")}>Annuler la recherche</button>}
      <ul>
        {data.filter((country)=>country.continents[0].includes(selectRadio))
        .sort((a,b)=>b.population - a.population)
        .slice(0, rangeValue).map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
