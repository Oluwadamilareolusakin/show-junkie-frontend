import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { Link } from 'react-router-dom';

const ShowCard = (props) => {
  const { data, storeId } = props;
  const { show } = data;
  const {
    id, name, rating, runtime, genres, image,
  } = show;
  const { average } = rating;

  return (
    <div className="show-card">
      {
        image ? <div className="show-image">
            <img alt="show-junkie" src={image.original} />
          </div> : <div className="show-image blank-image column">
            <p className="logo">ShowJunkie</p>
          </div>}
      <div className="show-details">
        <div className="row name-rating">
          <Link to={`/show/:${name}`} onClick={() => storeId(id)}>
            <h3>{name}</h3>
          </Link>
          <p className={average > 5 ? 'good-rating' : 'poor-rating'}>{average || 'No rating'}</p>
        </div>
        <div className="genres row">
          {genres.map(genre => <span key={genre} className="genre">{genre}</span>)}
          <p className="runtime">
            {runtime}
minutes
          </p>
        </div>
      </div>
    </div>
  );
};

ShowCard.defaultProps = {
  data: {},
  storeId: () => {},
};

ShowCard.propTypes = {
  data: PropTypes.arrayOf(oneOfType(['strings'])),
  storeId: PropTypes.func,
};

export default ShowCard;
