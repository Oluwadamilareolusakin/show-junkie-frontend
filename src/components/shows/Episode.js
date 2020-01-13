import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/show/episode.scss';
// airdate: "2019-05-11"
// airstamp: "2019-05-12T06:30:00+00:00"
// airtime: "02:30"
// id: 1647238
// image: null
// name: "Classic Chinese at Home"
// number: 17
// runtime: 30
// season: 19
// summary: null
// url

const Episode = (props) => {
  const { episode } = props;
  const {airtime, airdate, name, number, runtime, season, url} = episode;
  return (
    <div className="episode">
      <h2 className="name"><a href={url} target="_blank" rel="noopener norefferer">{name}</a></h2>
      <div className="existence-details row">
        <p className="season">S{season}</p>
        <p className="episode-number">Episode: {number}</p>
      </div>
      <div className="timing row">
        <p className="airdate">Airdate: {airdate}</p>
        <p className="airtime">Airtime: {airtime}</p>
        <p className="runtime">Runtime: {runtime}</p>
      </div>
    </div>
  );
};


Episode.defaultProps = {
  episode: {},
}

Episode.propTypes = {
  episode: PropTypes.arrayOf(PropTypes.oneOfType(Object)),
}


export default Episode;