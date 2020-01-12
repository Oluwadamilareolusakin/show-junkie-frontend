import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

const ShowHeader = (props) => {
  const { show } = props;
  const { name, image, genres, runtime, premiered, 
          status, rating, language, network, 
          schedule } = show;
  const { time, days } = schedule; 
  const { average } = rating;
  const { id, networkName, country } = network
  const { code } = country;
  const { original } = image;
  
  return (
    <div className="show-header row">
      <div className="show-left">
        <img src={original}/>
      </div>
      <div className="show-right">
          <h2 className="show-name">{name} </h2>
          <h3>Premiered: {premiered}<span className="show-status">{status}</span></h3>
          <h3 className="show-rating">{average}/10</h3>
          <div className="show-genres row">{genres.forEach(genre => 
            <p key={`${genre}${id}`} className="show-genre">
              {genre}
            </p>)}
          </div>

          <h4 className="show-runtime">Duration: {runtime}</h4>
          <h4 className="show-premier-date">Premiered: {runtime}</h4>
          <div className="show-schedule">
            <p className="show-time">{time}</p>
            <p className="show-days`">
              {days.forEach(day => 
                <p className="show-showing-day">{day}</p>
              )}
            </p>
          </div>

          <div className="show-extra-details row">
            <p className="show-country">{code}</p>
            <p className="show-language">{language}</p>
            <p className="show-network">{networkName}</p>
          </div>  
      </div>
    </div>
  );
};

ShowHeader.defaultProps = {
  show: {},
}

ShowHeader.propTypes = {
  show: PropTypes.arrayOf(oneOfType(['strings'])),
}

export default ShowHeader;