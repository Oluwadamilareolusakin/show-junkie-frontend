import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/show/season.scss';

// endDate: "2006-09-18"
// episodeOrder: null
// id: 26350
// image: null
// name: ""
// network: {id: 72, name: "Syndication", country: {…}}
// number: 1
// premiereDate: "2006-09-18"
// summary: ""
// url: "http://www.tvmaze.com/seasons/26350/rachael-ray-season-1"
// webChannel: null

const Season = (props) => {
  const { season } = props;

  const { number, url, image } = season;


  
  return (
    <div className="season">
      {image ? <img className="season-image" src={image && image.original } /> : <div className="blank-image column">Boy</div>}
      <div className="season-right column">
        <p className="season-number">
          <a href={url} target="_blank" rel="noopener norefferer">
            {number}
          </a>
        </p>
      </div>
    </div>
  );
};

Season.defaultProps = {
  number: null,
  endDate: null,
  season: {},
}

Season.propTypes = {
  number: PropTypes.number,
  season: PropTypes.arrayOf(PropTypes.oneOfType(Object)),
  endDate: PropTypes.number,
}

export default Season;