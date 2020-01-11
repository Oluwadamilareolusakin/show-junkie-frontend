import React, { Fragment } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import ShowHeader from './ShowHeader.js.js';
import ShowBody from './ShowBody';

const Show = (props) => {
  const { show } = props;
  return (
    <Fragment>
      <ShowHeader show={show}/>
      <ShowBody show={show}/>
    </Fragment>
  )
}

Show.defaultProps = {
  show: {},
}

Show.propTypes = {
  show: PropTypes.arrayOf(oneOfType(['strings'])),
}

export default Show;

