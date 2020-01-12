import React, { Fragment } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import ShowHeader from './ShowHeader';
import ShowBody from './ShowBody';

class Show extends React.Component {
  componentDidMount() {
    const {showId, fetchShow} = this.props
    fetchShow(showId);
  }
  
  render() {
    const { show, fetchedShow } = this.props;
    console.log(show, fetchedShow)
    return (
      fetchedShow && <Fragment>
        <ShowHeader show={show}/>
        <ShowBody show={show}/>
      </Fragment>
    )
  }
}

Show.defaultProps = {
  show: {},
  fetchedShow: false,
}

Show.propTypes = {
  show: PropTypes.arrayOf(oneOfType(Object)),
  fetchedShow: PropTypes.bool,

}

export default Show;

