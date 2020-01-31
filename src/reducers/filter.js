const UPDATE = 'UPDATE';

const todaysDate = new Date();
const year = todaysDate.getFullYear();
const day = todaysDate.getDate();
let month = todaysDate.getMonth() + 1;
if (month < 10) {
  month = `0${month}`;
}
const date = `${year}-${month}-${day}`;


const filterReducer = (state = { currentCountry: 'US', currentDate: date }, action) => {
  switch (action.type) {
    case UPDATE:
      return { ...state, currentCountry: action.country };
    default:
      return state;
  }
};

export default filterReducer;
