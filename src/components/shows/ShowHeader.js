import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import '../../stylesheets/show/show_header.scss';

const ShowHeader = (props) => {
  const { show } = props;
  const {
    name, image, genres, runtime, premiered,
    status, rating, language, network,
    schedule,
  } = show;
  let { summary } = show;
  summary = summary.replace(/<\/?[^>]+>/gi, '');
  const { time, days } = schedule;
  const { average } = rating;
  const { id, networkName, country } = network;
  const { code } = country;
  const { original } = image;
  const showImageStyle = {
    backgroundImage: `url(${original})`,
  };

  return (
    <div className="show-header row">
      <div className="show-left">
        <div className="show-img" style={showImageStyle} />
      </div>
      <div className="show-right column">
        <div className="show-right-header">
          <div className="show-img" style={showImageStyle} />
          <div>
            <h1 className="show-name">
              {name}
              {' '}
            </h1>
            <div className="row show-existence">
              <h3 className="premiered">
    Premiered:
                {premiered}
              </h3>

              <div className="show-status">
                <span className={status === 'Running'
                  ? 'good'
                  : 'poor'}
                >
                  {status}
                </span>
              </div>
              <p className="show-country extra-detail">
    Country:
                {code}
              </p>
              <p className="show-language extra-detail">
    Language:
                {language}
              </p>
              {networkName && (
              <p className="show-network extra-detail">
    TV Network:
                {networkName}
              </p>
              ) }
            </div>
            <div className="show-extra-details row">

              <div className="show-rating">
                <h3 className={average > 5 ? 'good' : 'poor'}>
                    Ratings:
                  {' '}
                  {average ? `${average}/10` : 'No Rating'}
                </h3>
              </div>
              <div className="show-genres row">
                {genres.forEach(genre => (
                  <p key={`${genre}${id}`} className="show-genre">
                    {genre}
                  </p>
                ))}
              </div>

              <h4 className={time < 30 ? 'show-runtime good' : 'show-runtime poor'}>
      Duration:
                {' '}
                {runtime}
                {' '}
      minutes
              </h4>

              <div className="show-schedule">
                <p className="show-time">
      Showing time:
                  {' '}
                  {time}
                </p>
                <p className="show-days`">
                  {days.forEach(day => <p className="show-showing-day">{day}</p>)}
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="summary">
          <h2>Summary</h2>
          <p>
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
};

ShowHeader.defaultProps = {
  show: {},
};

ShowHeader.propTypes = {
  show: PropTypes.arrayOf(oneOfType(['strings'])),
};

export default ShowHeader;
