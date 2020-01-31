import React from 'react';
import PropTypes from 'prop-types';

class FavouriteButton extends React.Component {
  constructor(props) {
    super(props);
    this.addToFavs = this.addToFavs.bind(this);
    this.removeFromFavs = this.removeFromFavs.bind(this);
  }

  componentDidMount() {
    const { authToken, fetchFavList } = this.props;
    fetchFavList(authToken);
  }

  addToFavs(event, showId) {
    event.preventDefault();
    const { authToken, favourite } = this.props;
    favourite(showId, authToken);
  }

  removeFromFavs(event, showId) {
    event.preventDefault();
    const { authToken, favList } = this.props;
    const { unfavourite } = this.props;
    const favouriteId = favList[showId];
    unfavourite(favouriteId, authToken);
  }

  render() {
    const { showId, favList } = this.props;
    return (
      favList[showId]
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
}

FavouriteButton.defaultProps = {
  favourite: () => {},
  unfavourite: () => {},
  fetchFavList: () => {},
  favList: [],
  showId: 1,
  authToken: '',
};

FavouriteButton.propTypes = {
  favourite: PropTypes.func,
  fetchFavList: PropTypes.func,
  unfavourite: PropTypes.func,
  favList: PropTypes.objectOf(Number),
  showId: PropTypes.number,
  authToken: PropTypes.string,
};


export default FavouriteButton;
