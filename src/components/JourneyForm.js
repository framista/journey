import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ModalError from './ModalError';

import {
  checkErrors,
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
  const [imageName, setImageName] = useState('');

  const [modalError, setModalError] = useState(false);

  const days = new Array(31).fill(0).map((_, index) => index + 1);
  const months = new Array(12).fill(0).map((_, index) => index + 1);
  const years = new Array(51)
    .fill(new Date().getFullYear())
    .map((y, index) => y - index);

  const onLocationChange = (e) => {
    const location = e.target.value;
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
    const newCompanions = journey.travellingCompanion.filter(
      (_, i) => i !== index
    );
    const travellingCompanionError = validateTravellingCompanion(
      'correct',
      newCompanions.length
    );
    setErrorJourney({
      ...errorJourney,
      travellingCompanion: travellingCompanionError,
    });
    setJourney({ ...journey, travellingCompanion: newCompanions });
  };

  const onTravellingCompanionChange = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log(member);
      console.log(member.length);
      const travellingCompanionError = validateTravellingCompanion(
        member,
        journey.travellingCompanion.length + 1 // one because don't want to be out range
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

  const onMemberChange = (e) => {
    const value = e.target.value;
    const travellingCompanionError = validateTravellingCompanion(
      value,
      journey.travellingCompanion.length
    );
    setMember(value);
    setErrorJourney({
      ...errorJourney,
      travellingCompanion: travellingCompanionError,
    });
  };

  const onFileImageChange = (e) => {
    const imageFile = e.target.value;
    const imageSize = Math.round(e.target.files[0].size / 1024);
    const fileImageError = validateImageFile(imageFile, imageSize);
    setErrorJourney({ ...errorJourney, imageFile: fileImageError });
    if (!fileImageError) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setJourney({ ...journey, imageFile: reader.result });
        setImageName(imageFile.split(/(\\|\/)/g).pop());
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSubmitJourneyForm = (e) => {
    e.preventDefault();
    const isFormInvalid = validateForm();
    if (isFormInvalid) {
      setModalError(true);
    } else {
      setModalError(false);
      props.submitJourney(journey);
    }
  };

  const validateForm = () => {
    const { location, startDate, description } = journey;
    const locationError = validateLocation(location);
    const descriptionError = validateDescription(description);
    const startDateError = validateStartDate(startDate);
    const newErrorJourney = {
      ...errorJourney,
      location: locationError,
      startDate: startDateError,
      description: descriptionError,
    };
    setErrorJourney(newErrorJourney);
    const { travellingCompanion, ...journeyWithoutCompanion } = newErrorJourney;
    return checkErrors(journeyWithoutCompanion);
  };

  const onCloseModalError = () => {
    setModalError(false);
  };

  return (
    <div>
      <form className="new-journey__form" onSubmit={onSubmitJourneyForm}>
        <h2 className="new-journey__title">{props.submitButton}</h2>
        <div className="new-journey__group">
          <label>Location</label>
          <input
            type="text"
            onChange={onLocationChange}
            value={journey.location}
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
            onChange={onMemberChange}
          />
          {errorJourney.travellingCompanion && (
            <p className="new-journey__error">
              {errorJourney.travellingCompanion}
            </p>
          )}
        </div>
        <div className="new-journey__group">
          <label>Image</label>
          <input type="file" id="file-image" onChange={onFileImageChange} />
          <div className="new-journey__image-info">
            <label htmlFor="file-image" className="new-journey__label--image">
              Choose image
            </label>
            {imageName && (
              <p className="new-journey__image-name">
                Selected file
                <span> {imageName}</span>
              </p>
            )}
          </div>
          {errorJourney.imageFile && (
            <p className="new-journey__error">{errorJourney.imageFile}</p>
          )}
        </div>
        <div className="new-journey__buttons">
          <Link
            className="new-journey__button new-journey__button--back"
            to="/"
          >
            back to homepage
          </Link>
          <button
            className="new-journey__button new-journey__button--add"
            onClick={onSubmitJourneyForm}
          >
            {props.submitButton}
          </button>
        </div>
      </form>
      {modalError && (
        <>
          <div className="background"></div>
          <ModalError
            title="Oops!"
            description="Your form is not correctly filled. Please improve the form and try again."
            onCloseModal={onCloseModalError}
          />
        </>
      )}
    </div>
  );
}

JourneyForm.propTypes = {
  journey: PropTypes.object.isRequired,
  submitButton: PropTypes.string.isRequired,
  submitJourney: PropTypes.func.isRequired,
};

export default JourneyForm;
