import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

const ShowCard = (props) => {
  const { show } = props;
  const { name, rating, runtime, genres } = show;

  return (
    <div className="show-card">
      <div className="show-image"></div>
      <div className="show-details">
        <div className="row">
          <h3>{name}</h3>
          <p>{rating}</p>
        </div>
        {genres.map(genre => <span key={genre}>{genre}</span>)}
        <p>{runtime}minutes</p>
      </div>
    </div>
  );
};

ShowCard.defaultProps = {
  show: {},
};

ShowCard.propTypes = {
  show: PropTypes.arrayOf(oneOfType(['strings'])),
};

export default ShowCard;
