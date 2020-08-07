import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function JourneyCreate() {
  const [journey, setJourney] = useState({
    location: '',
    startDate: '',
    description: '',
    travellingCompanion: ['Kasia', 'Basia', 'Franek', 'Tosia'],
    imageFile: '',
  });
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
    const location = e.target.value;
    setJourney({ ...journey, location });
    const locationError = validateLocation(location);
    setErrorJourney({
      ...errorJourney,
      location: locationError,
    });
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
      const travellingCompanionError = validateTravellingCompanion(member);
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

  const validateLocation = (location) => {
    return location.length < 3 || location.length > 60
      ? 'The location should contain min 3 and max 60 characters'
      : '';
  };

  const validateDescription = (description) => {
    return description.length > 300
      ? 'The description should contain max 300 characters'
      : '';
  };

  const validateTravellingCompanion = (member) => {
    const { travellingCompanion } = journey;
    if (travellingCompanion.length > 15) {
      return 'You have too much traveling companions';
    } else if (member.length < 3) {
      return 'The travelling companion should contain at least 3 characters';
    } else if (member.length > 15) {
      return 'The travelling companion should contain max 15 characters';
    } else {
      return '';
    }
  };

  return (
    <main className="container">
      <section className="new-journey">
        <img
          className="new-journey__img"
          src="https://images.unsplash.com/photo-1553512313-64af79fdfe9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
          alt="new-journey"
        />
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
                <select onClick={(e) => console.log(e.target.value)}>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
              <div className="new-journey__select">
                Month
                <select onClick={(e) => console.log(e.target.value)}>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="new-journey__select">
                Year
                <select onClick={(e) => console.log(e.target.value)}>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
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
              {journey.travellingCompanion.map((el, index) => (
                <div className="new-journey__chip" key={index}>
                  {el}
                  <div
                    className="new-journey__chip--delete"
                    onClick={() => deleteCompanion(index)}
                  >
                    &times;
                  </div>
                </div>
              ))}
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
            <input type="file" id="file-image" />
            <label htmlFor="file-image" className="new-journey__label--image">
              Choose image
            </label>
          </div>
          <div className="new-journey__buttons">
            <Link
              className="new-journey__button new-journey__button--back"
              to="/"
            >
              back to homepage
            </Link>
            <button className="new-journey__button new-journey__button--add">
              add journey
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default JourneyCreate;
