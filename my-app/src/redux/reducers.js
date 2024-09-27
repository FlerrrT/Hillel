const initialState = {
    hotels: [],
  };
  
  export const hotelsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_HOTELS':
        return { ...state, hotels: action.hotels };
      default:
        return state;
    }
  };