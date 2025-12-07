import { createContext, useContext, useEffect, useState } from "react";

const CityContext = createContext();

function CityProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  useEffect(function () {
    async function getData() {
      setIsLoading(true);
      const res = await fetch("http://localhost:3001/cities");
      const data = await res.json();
      setCities(data);
      setIsLoading(false);
    }
    getData();
  }, []);
  async function getCity(id) {
    setIsLoading(true);
    const res = await fetch(`http://localhost:3001/cities/${id}`);
    const data = await res.json();
    setCurrentCity(data);
    setIsLoading(false);
  }
  return (
    <CityContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CityContext.Provider>
  );
}

function useCity() {
  const contexts = useContext(CityContext);
  return contexts;
}

export { CityProvider, useCity };
