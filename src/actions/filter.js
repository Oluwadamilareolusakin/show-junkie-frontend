const UPDATE = 'UPDATE';

export const updateCurrentCountry = (country) => ({
  type: UPDATE,
  country,
});
