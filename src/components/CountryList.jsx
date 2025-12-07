import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import { useCity } from "../contexts/CityContext";
function CountryList() {
  const { cities, isLoading } = useCity();
  if (isLoading) return <Spinner />;

  return (
    <div className={styles.countryList}>
      {cities.map((city) => {
        return <CountryItem country={city.country} key={city.id} />;
      })}
    </div>
  );
}

export default CountryList;

// import Spinner from "./Spinner";
// import styles from "./CountryList.module.css";
// import CountryItem from "./CountryItem";
// import Message from "./Message";
// import { useCities } from "../contexts/CitiesContext";

// function CountryList() {
//   const { cities, isLoading } = useCities();

//   if (isLoading) return <Spinner />;

//   if (!cities.length)
//     return (
//       <Message message="Add your first city by clicking on a city on the map" />
//     );

//   const countries = cities.reduce((arr, city) => {
//     if (!arr.map((el) => el.country).includes(city.country))
//       return [...arr, { country: city.country, emoji: city.emoji }];
//     else return arr;
//   }, []);

//   return (
//     <ul className={styles.countryList}>
//       {countries.map((country) => (
//         <CountryItem country={country} key={country.country} />
//       ))}
//     </ul>
//   );
// }

// export default CountryList;
