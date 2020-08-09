import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  validateLocation,
  validateStartDate,
  validateDescription,
  validateTravellingCompanion,
  validateImageFile,
} from '../utils/validation';

function JourneyForm(props) {
  const [journey, setJourney] = useState(props.journey);

  const [errorJourney, setErrorJourney] = useState({
    location: '',
    startDate: '',
    description: '',
    travellingCompanion: '',
    imageFile: '',
  });

  const [member, setMember] = useState('');

  const days = new Array(31).fill(0).map((_, index) => index + 1);
  const months = new Array(12).fill(0).map((_, index) => index + 1);
  const years = new Array(51)
    .fill(new Date().getFullYear())
    .map((y, index) => y - index);

  const onLocationChange = (e) => {
    const location = e.target.value.trim();
    setJourney({ ...journey, location });
    const locationError = validateLocation(location);
    setErrorJourney({
      ...errorJourney,
      location: locationError,
    });
  };

  const onStartDateChange = (value, period) => {
    const { startDate } = journey;
    startDate[period] = value;
    setJourney({ ...journey, startDate });
    const startDateError = validateStartDate(startDate);
    setErrorJourney({ ...errorJourney, startDate: startDateError });
  };

  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setJourney({ ...journey, description });
    const descriptionError = validateDescription(description);
    setErrorJourney({
      ...errorJourney,
      description: descriptionError,
    });
  };

  const deleteCompanion = (index) => {
    const newCompanion = journey.travellingCompanion.filter(
      (_, i) => i !== index
    );
    setJourney({ ...journey, travellingCompanion: newCompanion });
  };

  const onTravellingCompanionChange = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const travellingCompanionError = validateTravellingCompanion(
        member,
        journey.travellingCompanion.length
      );
      if (!travellingCompanionError) {
        const newCompanion = [...journey.travellingCompanion, member];
        setJourney({ ...journey, travellingCompanion: newCompanion });
        setMember('');
      }
      setErrorJourney({
        ...errorJourney,
        travellingCompanion: travellingCompanionError,
      });
    }
  };

  const onFileImageChange = (e) => {
    const imageFile = e.target.value;
    const fileImageError = validateImageFile(imageFile);
    setErrorJourney({ ...errorJourney, imageFile: fileImageError });
    if (!fileImageError) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setJourney({ ...journey, imageFile: reader.result });
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <form className="new-journey__form">
      <div className="new-journey__group">
        <label>Location</label>
        <input
          type="text"
          name="location"
          onChange={onLocationChange}
          value={journey.location}
          autoFocus
        />
        {errorJourney.location && (
          <p className="new-journey__error">{errorJourney.location}</p>
        )}
      </div>
      <div className="new-journey__group">
        <label>Start date</label>
        <div className="new-journey__date">
          <div className="new-journey__select">
            Day
            <select
              onChange={(e) => onStartDateChange(e.target.value, 'day')}
              value={journey.startDate.day}
            >
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div className="new-journey__select">
            Month
            <select
              onChange={(e) => onStartDateChange(e.target.value, 'month')}
              value={journey.startDate.month}
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="new-journey__select">
            Year
            <select
              onChange={(e) => onStartDateChange(e.target.value, 'year')}
              value={journey.startDate.year}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        {errorJourney.startDate && (
          <p className="new-journey__error">{errorJourney.startDate}</p>
        )}
      </div>
      <div className="new-journey__group">
        <label>Description</label>
        <textarea
          name="description"
          onChange={onDescriptionChange}
          value={journey.description}
          rows={3}
        ></textarea>
        {errorJourney.description && (
          <p className="new-journey__error">{errorJourney.description}</p>
        )}
      </div>
      <div className="new-journey__group">
        <label>Travelling companion</label>
        <div className="new-journey__companion">
          {journey.travellingCompanion.length > 0 ? (
            journey.travellingCompanion.map((el, index) => (
              <div className="new-journey__chip" key={index}>
                {el}
                <div
                  className="new-journey__chip--delete"
                  onClick={() => deleteCompanion(index)}
                >
                  &times;
                </div>
              </div>
            ))
          ) : (
            <p className="new-journey__add-companion">
              Insert below the name of travelling companion and press 'Enter'
            </p>
          )}
        </div>
        <input
          type="text"
          onKeyPress={onTravellingCompanionChange}
          value={member}
          onChange={(e) => setMember(e.target.value)}
        />
        {errorJourney.travellingCompanion && (
          <p className="new-journey__error">
            {errorJourney.travellingCompanion}
          </p>
        )}
      </div>
      <div className="new-journey__group">
        <label>Image</label>
        <input
          type="file"
          id="file-image"
          onChange={(e) => onFileImageChange(e)}
        />
        <label htmlFor="file-image" className="new-journey__label--image">
          Choose image
        </label>
        {errorJourney.imageFile && (
          <p className="new-journey__error">{errorJourney.imageFile}</p>
        )}
      </div>
      <div className="new-journey__buttons">
        <Link className="new-journey__button new-journey__button--back" to="/">
          back to homepage
        </Link>
        <button className="new-journey__button new-journey__button--add">
          {props.submitButton}
        </button>
      </div>
    </form>
  );
}

export default JourneyForm;
