import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Hero from "./containers/Hero/Hero";
import Nav from "./containers/Nav/Nav";
import Shop from "./components/Shop/Shop";

function App() {
  // getAllPokemons().then((res) => {
  //   console.log(res.data.results);
  // });
  // getPokemonByName("bulbasaur").then((res) => {
  //   console.log(res.data.name);
  // });
  return (
    <>
      <Nav />
      <Hero />
      <Shop />
    </>
  );
}

export default App;
