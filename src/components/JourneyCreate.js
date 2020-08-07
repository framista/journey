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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setJourney({ ...journey, [name]: value });
  };

  const onLocationChange = (e) => {
    const location = e.target.value;
    setJourney({ ...journey, location });
    const locationError = validateLocation(location);
    setErrorJourney({
      ...errorJourney,
      location: locationError,
    });
  };

  const validateLocation = (location) => {
    return location.length < 3 || location.length > 60
      ? 'The location should contain min 3 and max 60 characters'
      : '';
  };

  const deleteCompanion = (index) => {
    const newCompanion = journey.travellingCompanion.filter(
      (_, i) => i !== index
    );
    setJourney({ ...journey, travellingCompanion: newCompanion });
  };

  const keyPressed = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newCompanion = [...journey.travellingCompanion, member];
      setJourney({ ...journey, travellingCompanion: newCompanion });
      setMember('');
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
              onChange={handleChange}
              value={journey.description}
            ></textarea>
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
              onKeyPress={keyPressed}
              value={member}
              onChange={(e) => setMember(e.target.value)}
            />
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