import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import ConteudoPrincipal from "./components/ConteudoPrincipal";
import artista from "../server/models/Artistas.js"

function App() {

  const [artistas, setArtistas] = useState([]);

  
  useEffect(() => {
      fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
      .finally(() => console.log('Finalizou a requisição'))
  },[])

  return (
    <>
      <Header/>
      <Container>
        <Sidebar/>
        <ConteudoPrincipal>       
          <>
          <h1>Rock</h1>
            {artistas
              .filter(artista => artista.genero === "rap")
            .map(artista => (
              <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
              <p>{artista.name}</p>
              </div>
            ))
            }
          </>
        </ConteudoPrincipal>
      </Container>
    </>
  )
}

export default App