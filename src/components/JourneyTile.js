import React, { useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import JourneyDeleteModal from './JourneyDeleteModal';
import Avatar from 'react-avatar';

function JourneyTile(props) {
  const { journey, deleteJourney, setBlockClicking } = props;
  const { location, startDate, imageFile } = journey;
  const [deleteModal, setDeleteModal] = useState(false);

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
      {imageFile ? (
        <img className="journey__img" src={imageFile} alt="" />
      ) : (
        <Avatar name={location.split(' ')[0]} size={60} round="50%" />
      )}
      <div className="journey__description">
        <h3 className="journey__h3">{location}</h3>
        {/* TODO: improve date */}
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
