import React from "react";

import GLOBALS from "app-globals";

import PropTypes from "prop-types";

import { Modal, Text } from "components";
import { textTypes } from "components/constants";

import styles from "./styles.module.scss";

const DetailsModal = ({
  isOpen,
  onClose,
  image,
  name,
  types,
  abilities,
  height,
}) => {
  return (
    <Modal
      className={styles.DetailsModal}
      isOpen={isOpen}
      handleClose={onClose}
    >
      <Text
        className={styles.DetailsModal_header}
        colorClass={GLOBALS.COLOR_CLASSES.BLUE["400"]}
        type={textTypes.HEADING.XL}
      >
        You Caught {name}
      </Text>

      <div className={styles.DetailsModal_content}>
        <img src={image} alt={name} width={150} />
        <div className={styles.DetailsModal_content_details}>
          <div className={styles.DetailsModal_content_details_text}>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.GREEN["100"]}
              type={textTypes.BODY.XL}
            >
              Types:
            </Text>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.BLUE["400"]}
              type={textTypes.BODY.MD}
            >
              {types.join(", ")}
            </Text>
          </div>

          <div className={styles.DetailsModal_content_details_text}>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.GREEN["100"]}
              type={textTypes.BODY.XL}
            >
              Abilities:
            </Text>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.BLUE["400"]}
              type={textTypes.BODY.MD}
            >
              {abilities.join(", ")}
            </Text>
          </div>

          <div className={styles.DetailsModal_content_details_text}>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.GREEN["100"]}
              type={textTypes.BODY.XL}
            >
              Height:
            </Text>
            <Text
              colorClass={GLOBALS.COLOR_CLASSES.BLUE["400"]}
              type={textTypes.BODY.MD}
            >
              {height}
            </Text>
          </div>
        </div>
      </div>
    </Modal>
  );
};

DetailsModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  image: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.array,
  abilities: PropTypes.array,
  height: PropTypes.number,
};

export default DetailsModal;
