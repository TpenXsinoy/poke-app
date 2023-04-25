import React from "react";

import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const PokeBall = ({ id, className, onClick }) => (
  <div className={cn(styles.PokeBall, className)} id={id}>
    <div className={styles.PokeBall_center} onClick={onClick}></div>
  </div>
);

PokeBall.defaultProps = {
  id: null,
  className: null,
  onClick: null,
};

PokeBall.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default PokeBall;
