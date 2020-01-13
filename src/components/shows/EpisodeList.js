import React from 'react';
import PropTypes from 'prop-types';
import Episode from './Episode';
import '../../stylesheets/show/episode_list.scss';

class EpisodeList extends React.Component {
  componentDidMount() {
    const { showId, fetchEpisodes } = this.props;
    fetchEpisodes(showId);
  }

  render(){
    const { episodes, fetchedEpisodes } = this.props;

    return (
      <div className="episodes row">
        {fetchedEpisodes && episodes.map(episode => <Episode episode={episode}/>)}
      </div>
    )
  };
};


EpisodeList.defaultProps = {
  showId: 1,
  fetchEpisodes: () => {},
  fetchedEpisodes: false,
  episodes: {},
}

EpisodeList.propTypes = {
  showId: PropTypes.number,
  episodes: PropTypes.arrayOf(PropTypes.oneOfType(Object)),
  fetchEpisodes: PropTypes.func,
  fetchedEpisodes: PropTypes.bool,
}

export default EpisodeList;