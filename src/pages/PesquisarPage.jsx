import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SliderCards from "../components/SliderCards";
import Card from "../components/Card";

export default function SearchPage() {
    const { search } = useParams();
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(``)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao buscar resultados");
                }
                return response.json();
            })
            .then(data => {
                setSearchResults(data);
                setError(null); // Reseta o erro se a busca for bem-sucedida
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [search]);

    return (
        <div className="bg-gray-900 rounded-lg w-8/12 p-8">
            <SliderCards titulo="Resultados da busca">
                {isLoading ? (
                    <h1 className="text-white text-xl mt-5"></h1>
                ) : error ? (
                    <h1 className="text-red-500 text-xl mt-5">{error}</h1>
                ) : searchResults.length > 0 ? (
                    searchResults.map(resultado => (
                        <Card key={resultado._id} {...resultado} />
                    ))
                ) : (
                    <h1 className="text-white text-xl mt-5">
                        Que pena, seu artista ainda não está aqui.
                    </h1>
                )}
            </SliderCards>
        </div>
    );
}
