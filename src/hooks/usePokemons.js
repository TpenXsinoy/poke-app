import { useState, useEffect } from "react";

import PokemonsService from "services/PokemonsService";

const usePokemons = (offset) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const { data: getPokemonsResponse } = await PokemonsService.list(offset);

      if (getPokemonsResponse) {
        setPokemons(getPokemonsResponse);
      }

      setIsLoading(false);
    };

    getPokemons();
  }, [offset]);

  return { isLoading, pokemons };
};

export default usePokemons;
