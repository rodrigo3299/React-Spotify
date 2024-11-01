import { useEffect, useState } from "react";
import SliderCards from "../components/SliderCards";
import Card from "../components/Card";

export default function ConteudoPrincipal() {
  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch('')
        .then(res => res.json())
        .then(data => {
          setArtistas(data);
          console.log(data);
        })
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false));
    }, 3000);
  }, []);

  return (
    <div className="bg-gray-900 rounded-lg w-8/12 grid grid-cols-1 justify-items-start pl-7 pt-7">
      {isLoading ? (
        <div className="flex flex-col flex-wrap justify-center items-center w-full font-bold gap-4">
          <p className="text-white">Carregando seus Artistas escolhidos....</p> {/* Mensagem de carregamento em branco */}
        </div>
      ) : (
        <>
          <SliderCards titulo="Rock">
            {artistas
              .filter(genero => genero.genres.includes("Rock"))
              .sort((a, b) => a.name.localeCompare(b.name))
              .slice(0, 5)
              .map(artista => (
                <Card key={artista._id} {...artista} />
              ))}
          </SliderCards>
          <SliderCards titulo="Electronic">
            {artistas
              .filter(genero => genero.genres.includes("Electronic"))
              .sort((a, b) => a.name.localeCompare(b.name))
              .slice(0, 4)
              .map(artista => (
                <Card key={artista._id} {...artista} />
              ))}
          </SliderCards>
        </>
      )}
    </div>
  );
}
