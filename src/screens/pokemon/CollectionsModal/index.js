import React from "react";

import GLOBALS from "app-globals";

import PropTypes from "prop-types";

import { IconButton, Modal, Text } from "components";
import { textTypes } from "components/constants";

import styles from "./styles.module.scss";

const CollectionsModal = ({ isOpen, onClose, collections, setCollections }) => {
  // Remove pokemon from collections
  const removeFromCollections = (name) => {
    setCollections((prevCollections) => {
      const newCollections = prevCollections.filter(
        (item) => item.name !== name
      );
      return [...newCollections];
    });
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
                removeFromCollections(collection.name);
              }}
            />
            <img src={collection.image} alt={collection.name} width={100} />
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.BLUE["400"]}
              type={textTypes.HEADING.MD}
            >
              {collection.name}
            </Text>
          </div>
        ))}
      </div>
    </Modal>
  );
};

CollectionsModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  collections: PropTypes.array,
  setCollections: PropTypes.any,
};

export default CollectionsModal;
