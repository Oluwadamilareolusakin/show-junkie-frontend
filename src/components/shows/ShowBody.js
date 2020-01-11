import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

// http://api.tvmaze.com/shows/1/episodes

const ShowBody = (props) => {
  const { show, getEpisodes } = props;
  const {summary, id} = show;

  return (
    <div className="show-body">
      <p>{summary}</p>
    </div>
  )
}


ShowBody.defaultProps = {
  show: {},
  getEpisodes: () => {},
}

ShowBody.propTypes = {
  show: PropTypes.arrayOf(oneOfType(['strings'])),
  getEpisodes: PropTypes.func,
}

export default ShowBody;
