import Card from "../components/Card"; // Importe o componente Card

export default function Sidebar() {
    const exampleCards = [
        { id: 1, name: "Musicas Fav."}, 
        { id: 2, name: "Boa pra jogar"},
        { id: 3, name: "2024 On Top"},
    ];

    return (
        <aside className="bg-gray-900 rounded-lg w-3/12 p-6 flex flex-col items-center text-center">
            <h2 className="text-white text-2xl font-bold mb-4">Minha Biblioteca</h2>
            <button className="bg-white py-2 px-4 rounded-full text-gray-900 font-medium hover:scale-105 transition duration-200 mb-4">
                Criar Playlist
            </button>
            <div className="flex flex-col items-center w-full">
                {exampleCards.map(card => (
                    <Card key={card.id} {...card} />
                ))}
            </div>
        </aside>
    );
}
