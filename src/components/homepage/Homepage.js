import React from 'react';
import CountryFilter from '../../containers/filters/CountryFilter';
import ShowList from '../../containers/shows/ShowList';

const Homepage = () => (
  <div>
    <div className="show-list-header row">
      <h2>Today&apos;s Shows</h2>
      <CountryFilter />
    </div>
    <ShowList />
  </div>
);


export default Homepage;
