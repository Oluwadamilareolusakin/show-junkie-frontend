import React from 'react';
import PropTypes from 'prop-types';
import countryCodes from '../../countryCodes';

const CountryFilter = (props) => {
  const { currentCountry, setCurrentCountry, date, fetchShows } = props;
  const countries = countryCodes();

  const handleChange = (event) => {
    const country = event.target.value;
    setCurrentCountry(country);
    fetchShows(country, date)
  };
  
  return (
    <select className="category-filter filter" value={currentCountry} onChange={(event) => handleChange(event)}>
      {countries.map(country => <option value={country.code}>{country.name}</option>)}
    </select>
  );
};

CountryFilter.defaultProps = {
  country: "US",
};

CountryFilter.propTypes = {
  country: PropTypes.string,
};

export default CountryFilter;