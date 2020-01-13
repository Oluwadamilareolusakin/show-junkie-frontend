import React from 'react';
import PropTypes from 'prop-types';

const SeasonFilter = (props) => {
  const handleChange = (event) => {
    const season = event.target.value;
    setCurrentSeason(season);
  };
  
  return (
    <select className="season-filter filter" value={currentSeason} onChange={(event) => handleChange(event)}>
      {seasonNumbers.map(season => <option value={season}>{season}</option>)}
    </select>
  );
};

SeasonFilter.defaultProps = {
  season: 1,
  currentSeason: 1,
  fetchEpisodes: () => {},
};

SeasonFilter.propTypes = {
  season: PropTypes.number,
  currentSeason: PropTypes.number,
  fetchEpisodes: PropTypes.func,
};

export default SeasonFilter;