import axios from "axios";
import React, {useEffect, useState} from "react";
import "./App.css";
import PokemonCard from "./PokemonCard";

function App() {
    const [pokenames, setPokenames] = useState(null);

    useEffect(() => {
        console.log("fetch names here");

        async function fetchNames() {
            const response = await axios.get(
                "https://pokeapi.co/api/v2/pokemon?limit=20"
            );
            console.log(response.data.results);
            setPokenames(response.data.results);
        }
            fetchNames();
        }, []);

    console.log(pokenames);

    return (
        <div>
            {pokenames ? (
                <div>
                    <button>Vorige</button>
                    <button>Volgende</button>
                    {pokenames.map((pokemon) => {
                        return <PokemonCard nameOfPokemon={pokemon.name}/>;
                    })}
                </div>
            ) : (
                <h3>Loading</h3>
            )}
        </div>
    );
}

export default App;