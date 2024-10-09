import CardSidebar from "./components/CardSidebar"
import Container from "./components/Container"
import ConteudoPrincipal from "./components/ConteudoPrincipal"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { useEffect, useState } from "react"

function App() {
  const [artistas, setArtistas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/artistas')
    .then( res => res.json())
    .then (res => setArtistas(res))
    .catch ( err => console.log(err))
    .finally(() => console.log("Acabou!"))
  }, [])

  return (

    <>
      <Header />
      <Container>
        <Sidebar>
          <CardSidebar />
          <CardSidebar />
          <CardSidebar />
        </Sidebar>
        <ConteudoPrincipal>
          <h1> Gênero Pura</h1>
          {
            artistas
            .filter(artista => artista.genero === "pura")
            .map( artista => (
              <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
            <p>{artista.name}</p>
          </div>
            ))
          }
          
        </ConteudoPrincipal>
      </Container>
    </>
  )
}

export default App
