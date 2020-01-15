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
        { fetchedShows && shows.map(data => <ShowCard key={data.id} data={data} />) }
      </div>
    );
  }
}

ShowList.defaultProps = {
  shows: {},
  fetchShows: () => {},
  fetchedShows: false,
  date: "",
  country: "",
}

ShowList.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.PropTypes.oneOfType(Object)),
  fetchShows: PropTypes.func,
  fetchedShows: PropTypes.bool,
  date: PropTypes.string,
  country: PropTypes.string,
}



export default ShowList;
