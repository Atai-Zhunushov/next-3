import React, {useEffect, useState} from 'react';
import Image from "next/image";
import RootLayout from "../src/app/layout";

const Pokemons = ({pokemons}) => {
    const [pokemonData, setPokemonData] = useState([]);
    useEffect(() => {
        const fetchPokemonData = async () => {
            const promises = pokemons.map(async (pokemon) => {
                const response = await fetch(pokemon.url);
                const data = await response.json();
                return {
                    name: data.name,
                    img: data.sprites.front_default,
                };
            });

            const pokemonDetails = await Promise.all(promises);
            setPokemonData(pokemonDetails);
        };

        fetchPokemonData();
    }, [pokemons]);
    console.log(pokemonData);
    return (
        <RootLayout>
            <div className="w-1000 flex align-center gap-10 flex-wrap mx-auto ">
                {pokemonData.map((pokemon, index) => (
                    <div key={index} >
                        <h2>{pokemon.name}</h2>
                        <Image src={pokemon.img} alt={pokemon.name} width={100} height={100}/>
                        <p></p>
                        {/* Другая информация о покемоне */}
                    </div>
                ))}
            </div>
        </RootLayout>
    );
};

export default Pokemons;

export async function getStaticProps(context) {
    try {
        const url = 'https://pokeapi.co/api/v2/';
        const response = await fetch(url + 'pokemon?offset=20&limit=20');
        const pokemons = await response.json();

        return {
            props: {
                pokemons: pokemons.results || [],
            },
        };
    } catch (error) {
        console.error('Ошибка получения списка покемонов:', error);
        return {
            props: { pokemons: [] },
        };
    }
}