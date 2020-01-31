import React from 'react';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import '../../stylesheets/modals/loading.scss';
import * as legoData from './legoloading.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Loading = (props) => {
  const { loadingAction, loading } = props;
  return (
    <FadeIn>
      { loading
        && (
          <div className="row loading-modal">
            <div className="row loading-items">
              <h1>
                { loadingAction }
              </h1>
              <Lottie
                options={defaultOptions}
                width={120}
                height={120}
              />
            </div>
          </div>
        )
      }
    </FadeIn>
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
