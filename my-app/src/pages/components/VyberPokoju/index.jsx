import "./style.css"
import { useEffect, useState } from "react";
import { Pokoj } from "../Pokoj"


export const VyberPokoju = () => {
const [pokoje, setPokoje] = useState([])

useEffect(() => {
  const fetchPokoje = async () => {
    const response = await fetch("http://localhost:4000/api/pokoje");
    const jsonResponse = await response.json();
    const data = jsonResponse.data
    setPokoje(data);
  };
  fetchPokoje();
}, []);

  return (
<section className="dark">
  <div className="container">
    <h2>Naše pokoje</h2>
    <p>
      Vyberte si, který z našich pokojů je pro vás ten pravý.
    </p>
    <div className="cards-row">
      {
        pokoje.map((pokoj) => {
          return <Pokoj nazev={pokoj.nazev} cena={pokoj.cena} mena={pokoj.kc} img={pokoj.img}/>
        })
      }
    </div>
  </div>
</section>
);
} 
