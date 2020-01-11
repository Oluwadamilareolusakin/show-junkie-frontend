import React from 'react';
import PropTypes from 'prop-types';

const ShowList = (props) => {
  const { shows } = props;
  return (
    shows.map(show => <ShowCard show={show}/>)
  );
};

ShowList.defaultProps = {
  shows: {},
}

ShowList.propTypes = {
  shows: PropTypes.arrayOf(oneOfType(Object)),
}

export default ShowList;
