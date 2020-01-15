const UPDATE = 'UPDATE';

const updateCurrentCountry = (country) => ({
  type: UPDATE,
  country,
});

export default updateCurrentCountry;
