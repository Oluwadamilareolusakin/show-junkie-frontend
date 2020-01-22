import React from 'react';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import * as legoData from './legoloading.json';
import * as doneData from './doneloading.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
  preserveAspectRatio: 'xMidYMid slice',
  },
};

const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
  preserveAspectRatio: 'xMidYMid slice',
  },
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
    };
  }

  render() {
    const { done } = this.state;
    const { loadingAction } = this.props;
    return (
      <div className="modal">
        <FadeIn>
          { !done ? (
            <div className="row">
              { loadingAction } 
              <Lottie 
                options={defaultOptions}
                width={120} 
                height={120} 
              />
            </div>
          ) : (
            <div className="row">
              { loadingAction }
              <Lottie 
                options={defaultOptions2}
                width={120} 
                height={120} 
              />
            </div>
          )}
        </FadeIn>
      </div>
    );
  }
}

Loading.defaultProps = {
  loadingAction: '',
  done: false,
};

Loading.propTypes = {
  loadingAction: PropTypes.string,
  done: PropTypes.bool,
};
