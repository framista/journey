import React from 'react';
import { formatDate } from '../../utils/format';
import PropTypes from 'prop-types';

function DeleteModal(props) {
  const { journey, deleteJourney, setDeleteModal, setBlockClicking } = props;
  const { location, startDate, id } = journey;

  const closeModal = (e) => {
    e.stopPropagation();
    setDeleteModal(false);
    setBlockClicking(false);
  };

  const handleDelete = (e, id) => {
    closeModal(e);
    deleteJourney(id);
  };

  return (
    <div>
      <div className="background"></div>
      <div className="delete-modal">
        <div className="delete-modal__title">
          <h5>Are you sure to delete this journey?</h5>
        </div>
        <div className="delete-modal__body">
          <p>
            If you want to delete journey in <span>{location}</span>, which
            started at <span>{formatDate(startDate)}</span> press YES.
          </p>
        </div>
        <div className="delete-modal__footer">
          <button
            className="delete-modal__button delete-modal__button--yes"
            onClick={(e) => handleDelete(e, id)}
          >
            YES
          </button>
          <button
            className="delete-modal__button delete-modal__button--no"
            onClick={(e) => closeModal(e)}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

DeleteModal.propTypes = {
  journey: PropTypes.object.isRequired,
  deleteJourney: PropTypes.func.isRequired,
  setDeleteModal: PropTypes.func.isRequired,
  setBlockClicking: PropTypes.func.isRequired
}
export default DeleteModal;
