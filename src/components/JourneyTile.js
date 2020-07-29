import React from 'react';
import { TiDelete } from 'react-icons/ti';

function JourneyTile(props) {
  const {deleteJourney} = props;
  const { id, localization, date, image, companions } = props.journey;
  return (
    <div className="journey" onClick={(e) => console.log(localization + date)}>
      <img className="journey__img" src={image} alt={localization} />
      <div className="journey__description">
        <h3 className="journey__h3">{localization}</h3>
        <p className="journey__p">{date}</p>
      </div>
      <TiDelete className="journey__icon" onClick={(e) => {
       e.stopPropagation();
       deleteJourney(id);
      }}/>
    </div>
  );
}

export default JourneyTile;
