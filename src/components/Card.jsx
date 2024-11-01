import { Link } from "react-router-dom";
import { generateRandomColor } from "../services/card-services";
import { useEffect, useState } from "react";

function Card({ _id, name, capa }) {
    const [randomColor, setRandomColor] = useState('');

    useEffect(() => {
        const randomColor = generateRandomColor();
        setRandomColor(randomColor);
    }, []);

    return (
        <Link to={`/artistas/${_id}`} className="group">
            <div
                className="w-40 h-48 m-5 flex flex-col justify-end items-center p-4 rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
                style={{ backgroundColor: randomColor }}
            >
                <h1 className="text-xl font-bold text-white text-center">{name}</h1>
                <img
                    src={capa === "spotify.jpg" ? capa : "/spotify.jpg"}
                    alt="Capa do Album"
                    className="w-full h-32 object-cover rounded-md mt-2 transition-transform transform group-hover:scale-105"
                />
            </div>
        </Link>
    );
}

export default Card;
