import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function Artista() {

    const {id} = useParams()
    const [artista, setArtista] = useState({})
    useEffect(() => {
            const puxarArtista = async () => {
        try{
            const artista = await fetch(`http://localhost:3000/artistas/${id}`);
            const resposta = await artista.json();
            setArtista(resposta);
            }
        catch (error) {
                console.error('Error fetching data:', error);
        }
    }
    puxarArtista();

    },[])
   
    
    return (
        <div>
            <h1>{artista.name}</h1>
        </div>
    )
}