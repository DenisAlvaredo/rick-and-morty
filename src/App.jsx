import React, {useEffect, useState} from "react"
import NavBar from "./components/header"
import Characters from "./components/characters";
import Pagination from "./components/pagination";

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  const initialurl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };

  const onPrevious = () =>{
    fetchCharacters(info.prev);
  }

  const onNext = () =>{
    fetchCharacters(info.next);
  }

  useEffect(() => {
      fetchCharacters(initialurl);
    }, [] );

  return(
    <>
      <NavBar brand="Rick and Morty App"/>

      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={characters}/>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </div>
    </>
  );
}

export default App;