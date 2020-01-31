import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/show/season.scss';

const Season = (props) => {
  const { season } = props;

  const { number, url, image } = season;


  return (
    <div className="season">
      {
        image ? (
          <img
            alt="show-junkie"
            className="season-image"
            src={image && image.original}
          />
        ) : (
          <div className="blank-image column">
            <p className="logo">ShowJunkie</p>
          </div>
        )
      }
      <div className="season-right column">
        <p className="season-number">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {number}
          </a>
        </p>
      </div>
    </div>
  );
};

Season.defaultProps = {
  number: null,
  season: {},
};

Season.propTypes = {
  number: PropTypes.number,
  season: PropTypes.objectOf(Object),
};

export default Season;
