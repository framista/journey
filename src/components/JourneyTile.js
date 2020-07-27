import React from 'react';

function JourneyTile(props) {
  const { localization, date, image, companions } = props.journey;
  return (
  <div className="journey">
      <img className="journey__img" src={image} alt={localization}/>
      <div className="journey__description">
          <h3 className="journey__h3">{localization}</h3>
          <p className="journey__p">{date}</p>
      </div>
  </div>);
}

export default JourneyTile;
