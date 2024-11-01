import { useNavigate, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

export default function Header() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    function handleSearch(e) {
        setSearch(e.target.value);
        // Apenas navegue para a página de pesquisa se o campo de pesquisa não estiver vazio
        if (e.target.value) {
            navigate(`/search/${e.target.value}`);
        }
    }

    return (
        <header className="flex justify-between items-center bg-gray-800 p-4 shadow-lg">
            <h1 className="text-2xl font-bold text-white">SpotifyDoDigolinha
            </h1>
            <form className="relative flex-grow max-w-lg mx-4">
                <input 
                    type="text" 
                    id="search" 
                    className="rounded-full text-white w-full h-10 indent-10 outline-none bg-gray-700 focus:outline-2 focus:outline-gray-50 transition-all duration-500 ease-in-out"
                    placeholder="O que você quer ouvir hoje Rodrigo?" 
                    value={search}
                    onChange={handleSearch}
                    onFocus={() => navigate('/search')}
                />
                <CiSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-xl text-gray-400" />
            </form>
            <nav className="flex gap-5 items-center">
                <NavLink to="/" className="text-lg text-white hover:underline">Home</NavLink>
                <button 
                    className="text-lg font-medium bg-white rounded-full text-gray-900 px-4 py-2 hover:scale-105 transition duration-200"
                    onClick={() => alert('Login/Logout functionality not implemented')}
                >
                    Login
                </button>
            </nav>
        </header>
    );
}
