import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/show/show_body.scss';

const ShowBody = () => {
  return (
    <div className="show-body row">
      <Link to="/episodes" className="card column">
        Episodes
      </Link>
      <Link to="/seasons" className="card column">
        Seasons
      </Link>
    </div>
  )
}

export default ShowBody;
