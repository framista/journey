import React from 'react';

function JourneyDeleteModal(props) {
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
          {/* TODO: improve date */}
          <p>
            If you want to delete journey in <span>{location}</span>, which
            started at <span>{startDate.day}</span> press YES.
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

export default JourneyDeleteModal;
