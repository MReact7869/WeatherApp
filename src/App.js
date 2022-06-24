import Banner from "./Component/Banner";
import { useState, useEffect } from "react";

function App() {

  const [apiData, setApiData] = useState({});
  
  useEffect(() => {
    fetch("https://api.weatherapi.com/v1/forecast.json?key=1b1516181c30404eaee92041220606&q=ujjain&days=10&aqi=no&alerts=no")
    .then(res => res.json())
    .then(result => setApiData(result));
    
    }, []);

  return (
   <>
  
  <Banner apiData={apiData}/>

  
   </>
  );
}

export default App;
