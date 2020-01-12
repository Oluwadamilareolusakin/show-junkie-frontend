const UPDATE = "UPDATE";

export const updateCurrentCountry = (country) => {
  return {
    type: UPDATE,
    country,
  };
};