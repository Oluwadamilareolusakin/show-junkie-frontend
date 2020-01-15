import React from 'react';
import PropTypes from 'prop-types';
import Season from './Season';
import '../../stylesheets/show/season_list.scss';

class SeasonList extends React.Component {
  componentDidMount() {
    const { showId, fetchSeasons } = this.props;
    fetchSeasons(showId);
  }

  render() {
    const { seasons, fetchedSeasons } = this.props;

    return (
      <div className="seasons row">
        {fetchedSeasons && seasons.map(season => <Season key={season.id} season={season} />)}
      </div>
    );
  }
}


SeasonList.defaultProps = {
  showId: 1,
  fetchSeasons: () => {},
  seasons: {},
  fetchedSeasons: false,
};

SeasonList.propTypes = {
  showId: PropTypes.number,
  seasons: PropTypes.arrayOf(PropTypes.oneOfType(Object)),
  fetchSeasons: PropTypes.func,
  fetchedSeasons: PropTypes.bool,
};

export default SeasonList;
