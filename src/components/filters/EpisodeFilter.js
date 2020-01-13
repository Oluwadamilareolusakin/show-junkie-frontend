import React from 'react';
import PropTypes from 'prop-types';

const EpisodeFilter = (props) => {
  let { episodeNumbers } = props;
  episodeNumbers = ["All", episodeNumbers]
  
  const handleChange = (event) => {
    const episode = event.target.value;
    setCurrentEpisode(episode);
  };
  
  return (
    <select className="Episode-filter filter" value={currentEpisode} onChange={(event) => handleChange(event)}>
      {episodeNumbers.map(episode => <option value={episode}>{episode}</option>)}
    </select>
  );
};

EpisodeFilter.defaultProps = {
  Episode: 1,
  currentEpisode: 1,
  fetchEpisodes: () => {},
};

EpisodeFilter.propTypes = {
  Episode: PropTypes.number,
  currentEpisode: PropTypes.number,
  fetchEpisodes: PropTypes.func,
};

export default EpisodeFilter;