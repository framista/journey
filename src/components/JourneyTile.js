import React, { useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import JourneyDeleteModal from './JourneyDeleteModal';

function JourneyTile(props) {
  const { journey, deleteJourney, setBlockClicking } = props;
  const { location, startDate, imageFile } = journey;
  const [deleteModal, setDeleteModal] = useState(false);


  console.log(journey)
  const handleDelete = (e) => {
    e.stopPropagation();
    setDeleteModal(true);
    setBlockClicking(true);
  };

  const handleShow = () => {
    console.log(location + startDate);
  };

  return (
    <div className="journey" onClick={handleShow}>
      <img className="journey__img" src={imageFile} alt={location} />
      <div className="journey__description">
        <h3 className="journey__h3">{location}</h3>
        <p className="journey__p">{startDate.day}</p>
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
