import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import ShowHeader from './ShowHeader';
import ShowBody from './ShowBody';

class Show extends React.Component {
  componentDidMount() {
    const { showId, fetchShow } = this.props;
    fetchShow(showId);
  }

  render() {
    const { show, fetchedShow } = this.props;
    return (
      fetchedShow && (
        <>
          <ShowHeader show={show} />
          <ShowBody show={show} />
        </>
      )
    );
  }
}

Show.defaultProps = {
  show: {},
  fetchedShow: false,
  fetchShow: () => {},
  showId: 1,
};

Show.propTypes = {
  show: PropTypes.arrayOf(oneOfType(Object)),
  fetchedShow: PropTypes.bool,
  fetchShow: PropTypes.func,
  showId: PropTypes.number,
};

export default Show;
