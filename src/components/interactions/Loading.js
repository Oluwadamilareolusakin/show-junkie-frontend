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

const Loading = (props) => {
  const { loadingAction, loading } = props;
  return (
    <div className="modal">
      <FadeIn>
        { loading ? (
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
};

Loading.defaultProps = {
  loadingAction: '',
  loading: false,
};

Loading.propTypes = {
  loadingAction: PropTypes.string,
  loading: PropTypes.bool,
};

export default Loading;
