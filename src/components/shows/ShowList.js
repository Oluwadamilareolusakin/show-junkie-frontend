import React from 'react';
import PropTypes from 'prop-types';
import ShowCard from '../../containers/shows/ShowCard';
import '../../stylesheets/show/show.scss';

class ShowList extends React.Component {
  componentDidMount() {
    const {
      country, date,
      fetchShows,
      fetchFavList, authToken,
    } = this.props;

    fetchShows(country, date);
    fetchFavList(authToken);
  }

  render() {
    const { shows, fetchedShows } = this.props;
    return (
      <div className="shows row">
        { fetchedShows && shows.map(data => <ShowCard key={data.id} data={data.show} />) }
      </div>
    );
  }
}

ShowList.defaultProps = {
  shows: {},
  fetchShows: () => {},
  fetchedShows: false,
  date: '',
  country: '',
  authToken: '',
  fetchFavList: () => {},
};

ShowList.propTypes = {
  shows: PropTypes.arrayOf(Object),
  fetchShows: PropTypes.func,
  fetchFavList: PropTypes.func,
  fetchedShows: PropTypes.bool,
  date: PropTypes.string,
  country: PropTypes.string,
  authToken: PropTypes.string,
};


export default ShowList;
