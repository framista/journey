import React, { useState, Fragment } from 'react';
import { TiDelete } from 'react-icons/ti';
import JourneyDeleteModal from './JourneyDeleteModal';
import Avatar from 'react-avatar';
import { formatTimeAgo } from '../utils/format';
import JourneyDetail from './JourneyDetail';

function JourneyTile(props) {
  const { journey, deleteJourney, setBlockClicking } = props;
  const { location, startDate, imageFile } = journey;
  const [deleteModal, setDeleteModal] = useState(false);
  const [detail, setDetail] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation();
    setDeleteModal(true);
    setBlockClicking(true);
  };

  const handleShow = () => {
    setDetail(true);
  };

  return (
    <Fragment>
      <div className="journey" onClick={handleShow}>
        {imageFile ? (
          <img className="journey__img" src={imageFile} alt="" />
        ) : (
          <Avatar name={location.split(' ')[0]} size={60} round="50%" />
        )}
        <div className="journey__description">
          <h3 className="journey__h3">{location}</h3>
          <p className="journey__p">
            {formatTimeAgo(
              new Date(startDate.year, startDate.month - 1, startDate.day, 12)
            )}
          </p>
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
      {detail && (
        <JourneyDetail
          journey={journey}
          setDetail={setDetail}
          setBlockClicking={setBlockClicking}
        />
      )}
    </Fragment>
  );
}

export default JourneyTile;
