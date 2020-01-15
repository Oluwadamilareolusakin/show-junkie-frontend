import React from 'react';
import PropTypes from 'prop-types';
import countryCodes from '../../countryCodes';

const CountryFilter = (props) => {
  const {
    currentCountry, setCurrentCountry, date, fetchShows,
  } = props;
  const countries = countryCodes();

  const handleChange = (event) => {
    const country = event.target.value;
    setCurrentCountry(country);
    fetchShows(country, date);
  };

  return (
    <select
      className="category-filter filter"
      value={currentCountry}
      onChange={(event) => handleChange(event)}
    >
      {countries.map((country) => (
        <option
          value={country.code}
          key={country.name}
        >
          {country.name}
        </option>
      ))}
    </select>
  );
};

CountryFilter.defaultProps = {
  currentCountry: 'US',
  date: '',
  setCurrentCountry: () => {},
  fetchShows: () => {},
};

CountryFilter.propTypes = {
  currentCountry: PropTypes.string,
  date: PropTypes.string,
  setCurrentCountry: PropTypes.func,
  fetchShows: PropTypes.func,
};

export default CountryFilter;
