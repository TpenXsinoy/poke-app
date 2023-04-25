import React from "react";
import PropTypes from "prop-types";

import cn from "classnames";
import ReactModal from "react-modal";

import Icon from "../Icon";

import styles from "./styles.module.scss";

const Modal = ({ className, children, handleClose, isOpen }) => (
  <ReactModal
    isOpen={isOpen}
    className={cn(className, styles.Modal)}
    onRequestClose={handleClose}
    overlayClassName={styles.Modal_overlay}
    contentLabel="Modal"
    shouldFocusAfterRender
    shouldCloseOnOverlayClick
    shouldCloseOnEsc
    shouldReturnFocusAfterClose
  >
    <button
      id="closeModalButton"
      type="button"
      className={styles.Modal_close}
      onClick={handleClose}
    >
      <Icon icon="close" className={styles.Modal_closeIcon} />
    </button>
    {children}
  </ReactModal>
);
ReactModal.setAppElement(document.getElementById("root"));

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Modal;
