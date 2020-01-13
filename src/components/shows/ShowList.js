import React from 'react';
import PropTypes from 'prop-types';
import ShowCard from '../../containers/shows/ShowCard';
import '../../stylesheets/show/show.scss';

class ShowList extends React.Component {
  
  componentDidMount() {
    const { country, date, fetchShows } = this.props;
    fetchShows(country, date);
  }
  
  render() {
    const { shows, fetchedShows } = this.props;
    return (
      <div className="shows row">
        { fetchedShows && shows.map(data => <ShowCard data={data} />) }
      </div>
    );
  }
};

ShowList.defaultProps = {
  shows: {},
  fetchShows: () => {},
  fetchedShows: false,
}

ShowList.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.oneOfType(Object)),
  fetchShows: PropTypes.func,
  fetchedShows: PropTypes.bool,
}



export default ShowList;
