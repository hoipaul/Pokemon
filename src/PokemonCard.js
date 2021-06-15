import React, {useState, useEffect} from "react";
import axios from "axios";

function PokemonCard(props) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function fetchPokemon() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.nameOfPokemon}`);
            console.log(response.data);
            setPokemon(response.data);
        }

        fetchPokemon();
    }, []);

    return (
        <div>
            {pokemon ? (
                <div><h1>
                    {pokemon.name}
                </h1>
                    <div>Moves: {pokemon.moves.length}</div>
                    <br/>
                    <div>Weight: {pokemon.weight}</div>
                    <div>{pokemon.abilities.map((ability) => {
                        console.log(ability);
                        return <p>Ability: {ability.ability.name}</p>;
                    })}</div>
                    <img src={pokemon.sprites.front_default} alt="pokemonplaatje"/>
                </div>) : (<h3>loading</h3>)}
        </div>
    );
}

export default PokemonCard;