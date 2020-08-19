import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

function JourneyDetail(props) {
  const { journey, setBlockClicking, setDetail } = props;
  const {
    id,
    location,
    startDate,
    description,
    travellingCompanion,
    imageFile,
  } = journey;

  const closeModal = (e) => {
    e.stopPropagation();
    setDetail(false);
    setBlockClicking(false);
  };

  return ReactDOM.createPortal(
    <>
      <div className="background"></div>
      <div className="journey-detail">
        <div className="journey-detail__title">
          <h5>{location}</h5>
        </div>
        <div className="journey-detail__body">
          <div className="journey-detail__image">
            {imageFile ? (
              <img src={imageFile} alt="journey-img" />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="journey-img"
              />
            )}
          </div>
          <p className="journey-detail__location">
            Your journey in&nbsp;
            <span>{location}</span> started at&nbsp;
            <span>
              {startDate.day}.{startDate.month}.{startDate.year}
            </span>
            .
          </p>
          {travellingCompanion.length > 0 && (
            <>
              <p className="journey-detail__travelling">
                You spent your vacation with:
              </p>
              <ul className="journey-detail__list">
                {travellingCompanion.map((companion, index) => (
                  <li key={index} className="journey-detail__list--item">
                    {companion.trim()}
                  </li>
                ))}
              </ul>
            </>
          )}
          {description && (
            <p className="journey-detail__description">{description}</p>
          )}
        </div>
        <div className="journey-detail__footer">
          <Link
            to={`/edit/${id}`}
            className="journey-detail__button journey-detail__button--edit"
          >
            edit
          </Link>
          <button
            className="journey-detail__button journey-detail__button--cancel"
            onClick={closeModal}
          >
            close
          </button>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}

JourneyDetail.propTypes = {
  journey: PropTypes.object.isRequired,
  setBlockClicking: PropTypes.func.isRequired,
  setDetail: PropTypes.func.isRequired,
};

export default JourneyDetail;
