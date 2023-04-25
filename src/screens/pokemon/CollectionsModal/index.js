import React from "react";

import GLOBALS from "app-globals";

import PropTypes from "prop-types";

import { Button, IconButton, Modal, Text } from "components";
import { textTypes } from "components/constants";

import styles from "./styles.module.scss";

const CollectionsModal = ({
  isOpen,
  onClose,
  collections,
  setCollections,
  setAddedPokemonNames,
}) => {
  // Remove pokemon from collections
  const handleRemoveFromCollections = (name) => {
    setCollections((prevCollections) => {
      const newCollections = prevCollections.filter(
        (item) => item.name !== name
      );
      return [...newCollections];
    });

    setAddedPokemonNames((prevAddedPokemonNames) => {
      const newAddedPokemonNames = prevAddedPokemonNames.filter(
        (item) => item !== name
      );
      return [...newAddedPokemonNames];
    });
  };

  // Remove all pokemon from collections
  const handleRemoveAllCollections = () => {
    setCollections([]);
    setAddedPokemonNames([]);
  };

  return (
    <Modal
      className={styles.CollectionsModal}
      isOpen={isOpen}
      handleClose={onClose}
    >
      <Text
        colorClass={GLOBALS.COLOR_CLASSES.GREEN["100"]}
        type={textTypes.HEADING.XL}
      >
        Your Pokemon Collections
      </Text>

      <div className={styles.CollectionsModal_collections}>
        {collections.map((collection) => (
          <div
            className={styles.CollectionsModal_content}
            key={collection.name}
          >
            <IconButton
              className={styles.CollectionsModal_content_icon}
              icon="remove"
              onClick={() => {
                handleRemoveFromCollections(collection.name);
              }}
            />
            <img src={collection.image} alt={collection.name} width={80} />
            <Text
              className={styles.CollectionsModal_content_text}
              colorClass={GLOBALS.COLOR_CLASSES.BLUE["400"]}
              type={textTypes.HEADING.SM}
            >
              {collection.name}
            </Text>
          </div>
        ))}
      </div>
      {collections.length !== 0 && (
        <Button
          className={styles.CollectionsModal_deleteAll}
          onClick={handleRemoveAllCollections}
        >
          <Text type={textTypes.HEADING.SM}>Release Pokemons</Text>
        </Button>
      )}
    </Modal>
  );
};

CollectionsModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  collections: PropTypes.array,
  setCollections: PropTypes.any,
  setAddedPokemonNames: PropTypes.any,
};

export default CollectionsModal;
