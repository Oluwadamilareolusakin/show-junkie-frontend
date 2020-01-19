import React from 'react';
import PropTypes from 'prop-types';
import ShowCard from '../../containers/shows/ShowCard';
import '../../stylesheets/show/show.scss';

class FavouriteList extends React.Component {
  componentDidMount() {
    const {
      favList,
      fetchFavourites,
      fetchFavList,
      authToken,
    } = this.props;

    fetchFavList(authToken);
    fetchFavourites(favList);
  }

  render() {
    const { favourites, fetchedFavourites } = this.props;

    return (
      <>
        <div className="show-list-header">
          <h1>Your favourite shows</h1>
        </div>
        <div className="shows row">
          {fetchedFavourites && favourites.map(data => <ShowCard key={data.id} data={data} />)}
        </div>
      </>
    );
  }
}

FavouriteList.defaultProps = {
  favList: [],
  fetchFavourites: () => {},
  fetchFavList: () => {},
  favourites: {},
  fetchedFavourites: false,
  authToken: '',
};

FavouriteList.propTypes = {
  favList: PropTypes.arrayOf(PropTypes.oneOfType(Object)),
  favourites: PropTypes.arrayOf(PropTypes.oneOfType(Object)),
  fetchFavourites: PropTypes.func,
  fetchFavList: PropTypes.func,
  fetchedFavourites: PropTypes.bool,
  authToken: PropTypes.string,
};

export default FavouriteList;
