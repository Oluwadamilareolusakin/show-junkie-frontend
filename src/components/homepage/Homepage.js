import React from 'react';
import CountryFilter from '../../containers/filters/CountryFilter';
import ShowList from '../../containers/shows/ShowList';

class Homepage extends React.Component {
  render(){
    return (
      <div>
        <div className="show-list-header row">
          <h2>Today's Shows</h2>
          <CountryFilter />
        </div>
        <ShowList />
      </div>
    );
  };
};



export default Homepage;