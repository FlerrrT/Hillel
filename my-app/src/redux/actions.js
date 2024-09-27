export const fetchHotels = (data) => ({
    type: 'FETCH_HOTELS_REQUEST',
    payload: data
  });
  
  export const setHotels = (hotels) => ({
    type: 'SET_HOTELS',
    hotels
  });