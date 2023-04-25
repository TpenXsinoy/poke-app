import React, { useState } from "react";

import {
  Button,
  Container,
  IconButton,
  PokeBall,
  Section,
  Text,
} from "components";

import logo from "../../static/images/logo.png";

import DetailsModal from "./DetailsModal";
import CollectionsModal from "./CollectionsModal";

import usePokemons from "hooks/usePokemons";
import PokemonsService from "services/PokemonsService";

import styles from "./styles.module.scss";
import { textTypes } from "components/constants";
import useCollections from "hooks/useCollections";

const Pokemon = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [offset, setOffset] = useState(Math.floor(Math.random() * 1001));
  const [retrievedPokemon, setRetrievedPokemon] = useState();
  const [addedPokemonNames, setAddedPokemonNames] = useState([]);

  const { pokemons, isLoading: isPokemonListsLoading } = usePokemons(offset);
  const [collections, setCollections] = useCollections("collections", []);

  const handleRetrievedPokemon = async (name) => {
    // Retrieve specific pokemon from clicked pokeball
    const { data } = await PokemonsService.retrieveByName(name);
    setRetrievedPokemon(data);

    // Prevent duplicate pokemon in collections
    if (addedPokemonNames.includes(name)) {
      return;
    }

    // Add pokemon to collections
    setCollections((prevCollections) => {
      if (prevCollections.includes(name)) return prevCollections;
      return [
        ...prevCollections,
        { name: data.name, image: data.sprites.front_default },
      ];
    });

    // Add pokemon name to addedPokemonNames
    setAddedPokemonNames((prevAddedPokemonNames) => [
      ...prevAddedPokemonNames,
      name,
    ]);
  };

  // Prevent rendering when pokemon lists is still loading
  if (isPokemonListsLoading) return;

  return (
    <>
      <Section className={styles.Pokemon}>
        <IconButton
          className={styles.Pokemon_refresh}
          icon="refresh"
          onClick={() => setOffset(Math.floor(Math.random() * 1001))}
        />
        <Container className={styles.Pokemon_container}>
          <img
            className={styles.Pokemon_image}
            src={logo}
            alt="Pokemon"
            width={400}
          />

          <div className={styles.Pokemon_pokeball}>
            {pokemons.results.map((pokemon) => (
              <PokeBall
                key={pokemon.name}
                onClick={() => {
                  setIsDetailsModalOpen(true);
                  handleRetrievedPokemon(pokemon.name);
                }}
              />
            ))}
          </div>

          <Button
            className={styles.Pokemon_button}
            onClick={() => setIsCollectionsOpen(true)}
          >
            <Text
              className={styles.Pokemon_button_text}
              type={textTypes.HEADING.SM}
            >
              View Collections
            </Text>
          </Button>
        </Container>
      </Section>

      {isDetailsModalOpen && retrievedPokemon && (
        <DetailsModal
          isOpen={isDetailsModalOpen}
          onClose={() => setIsDetailsModalOpen(false)}
          image={retrievedPokemon?.sprites?.front_default}
          name={retrievedPokemon?.name}
          types={retrievedPokemon?.types?.map((type) => type.type.name)}
          abilities={retrievedPokemon?.abilities?.map(
            (ability) => ability.ability.name
          )}
          height={retrievedPokemon?.height}
        />
      )}

      {isCollectionsOpen && (
        <CollectionsModal
          isOpen={isCollectionsOpen}
          onClose={() => setIsCollectionsOpen(false)}
          collections={collections}
          setCollections={setCollections}
        />
      )}
    </>
  );
};

export default Pokemon;
