import React from 'react';
import PropTypes from 'prop-types';

const FavouriteButton = (props) => {
  const { showId, favourites, authToken } = props;

  const addToFav = (event, showId) => {
    event.preventDefault();
    const { favourite } = props;
    favourite(showId, authToken);
  };

  const unfavourite = (event, showId) => {
    event.preventDefault();
    const { unfavourite } = props;
    const favouriteId = favourites[showId];
    unfavourite(showId, favouriteId, authToken);
  };

  return (
    favourites.includes(showId)
      ? (
        <button
          type="button"
          onClick={event => unfavourite(event, showId)}
          className="unfavourite-btn fav-action"
        >
          Unsubscribe
        </button>
      )

      : (
        <button
          type="button"
          onClick={event => addToFav(event, showId)}
          className="favourite-btn fav-action"
        >
          Add to favourites
        </button>
      )
  );
};

FavouriteButton.defaultProps = {
  favourite: () => {},
  unfavourite: () => {},
  favourites: [],
  showId: 1,
  authToken: '',
};

FavouriteButton.propTypes = {
  favourite: PropTypes.func,
  unfavourite: PropTypes.func,
  favourites: PropTypes.arrayOf(PropTypes.oneOfType([Number])),
  showId: PropTypes.number,
  authToken: PropTypes.string,
};


export default FavouriteButton;
