import React, { useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import JourneyDeleteModal from './JourneyDeleteModal';

function JourneyTile(props) {
  const { journey, deleteJourney, setBlockClicking } = props;
  const { id, localization, date, image, companions } = journey;
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation();
    setDeleteModal(true);
    setBlockClicking(true);
  };

  const handleShow = () => {
    console.log(localization + date);
  };

  return (
    <div className="journey" onClick={handleShow}>
      <img className="journey__img" src={image} alt={localization} />
      <div className="journey__description">
        <h3 className="journey__h3">{localization}</h3>
        <p className="journey__p">{date}</p>
      </div>
      <TiDelete className="journey__icon" onClick={(e) => handleDelete(e)} />
      {deleteModal && (
        <JourneyDeleteModal
          journey={journey}
          deleteJourney={deleteJourney}
          setDeleteModal={setDeleteModal}
          setBlockClicking={setBlockClicking}
        />
      )}
    </div>
  );
}

export default JourneyTile;
