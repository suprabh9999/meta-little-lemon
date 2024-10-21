import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header className="booking-form-header">
      <section className="booking-form-section">
        <form onSubmit={handleSumbit} className="booking-form">
          <fieldset className="booking-form-fieldset">
            <div className="booking-form-group">
              <label htmlFor="book-date" className="booking-form-label">
                Choose Date
              </label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
                className="booking-form-input"
              />
            </div>
            <div className="booking-form-group">
              <label htmlFor="book-time" className="booking-form-label">
                Choose Time
              </label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
                required
                className="booking-form-select"
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>
            <div className="booking-form-group">
              <label htmlFor="book-guests" className="booking-form-label">
                Number of Guests
              </label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value);
                }}
                type="number"
                placeholder={0}
                max={10}
                required
                className="booking-form-input"
              />
            </div>
            <div className="booking-form-group">
              <label htmlFor="book-occasion" className="booking-form-label">
                Occasion
              </label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
                className="booking-form-select"
              >
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div className="booking-form-group">
              <input
                aria-label="On Click"
                type="submit"
                value="Make Your Reservation"
                className="booking-form-submit"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
