import React from 'react';
import PropTypes from 'prop-types';

class FavouriteButton extends React.Component {
  constructor(props) {
    super(props);
    this.addToFavs = this.addToFavs.bind(this);
    this.removeFromFavs = this.removeFromFavs.bind(this);
  }
  
  componentDidMount() {
    const { authToken } = this.props;
    this.props.fetchFavList(authToken);
  }
  
  addToFavs(event, showId) {
    event.preventDefault();
    const { authToken, favourite } = this.props;
    favourite(showId, authToken);
  };

  removeFromFavs(event, showId) {
    event.preventDefault();
    const { authToken, favourites } = this.props;
    const { unfavourite } = this.props;
    const favouriteId = favourites[showId];
    unfavourite(favouriteId, authToken);
  };

  render () {
    const { showId, favourites } = this.props;
    return (
      favourites[showId]
        ? (
          <button
            type="button"
            onClick={event => this.removeFromFavs(event, showId)}
            className="unfavourite-btn fav-action"
          >
            Unsubscribe
          </button>
        )
  
        : (
          <button
            type="button"
            onClick={event => this.addToFavs(event, showId)}
            className="favourite-btn fav-action"
          >
            Add to favourites
          </button>
        )
    );
  }
};

FavouriteButton.defaultProps = {
  favourite: () => {},
  removeFromFavs: () => {},
  fetchFavList: () => {},
  favourites: [],
  showId: 1,
  authToken: '',
  tempFavs: [],
};

FavouriteButton.propTypes = {
  favourite: PropTypes.func,
  fetchFavList: PropTypes.func,
  removeFromFavs: PropTypes.func,
  favourites: PropTypes.arrayOf(PropTypes.oneOfType([Number])),
  tempFavs: PropTypes.arrayOf(PropTypes.oneOfType([Number])),
  showId: PropTypes.number,
  authToken: PropTypes.string,
};


export default FavouriteButton;
