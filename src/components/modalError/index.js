import React from 'react';
import PropTypes from 'prop-types';

function ModalError(props) {
  const { title, description, onCloseModal } = props;
  return (
    <div className="modal-error">
      <div className="modal-error__icon">!</div>
      <h3 className="modal-error__title">{title}</h3>
      <p className="modal-error__description">{description}</p>
      <button className="modal-error__button" onClick={onCloseModal}>
        OK
      </button>
    </div>
  );
}

PropTypes.ModalError = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default ModalError;
