import React from 'react';
import PropTypes from 'prop-types';

const FavouriteButton = (props) => {
  const { showId, favourites } = props;

  const addToFav = (event, showId) => {
    event.preventDefault();
    const { favourite, authToken } = props;
    favourite(showId, authToken);
  };

  return (
    <button type="button" onClick={event => addToFav(event, showId)}>
      { favourites.includes(showId) ? 'Unsubscribe' : 'Add to favourites' }
    </button>
  );
};

FavouriteButton.defaultProps = {
  favourite: () => {},
  favourites: [],
  showId: 1,
  authToken: "",
};

FavouriteButton.propTypes = {
  favourite: PropTypes.func,
  favourites: PropTypes.arrayOf(PropTypes.oneOfType([Number])),
  showId: PropTypes.number,
  authToken: PropTypes.string,
};


export default FavouriteButton;
