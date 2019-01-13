import weather from '../api/weather';

export const fetchWeather = () => async dispatch => {
  await navigator.geolocation.getCurrentPosition(async position => {
    const response = await weather.get("/data/2.5/weather", {
      params: {
        lat: `${position.coords.latitude}`,
        lon: `${position.coords.longitude}`,
        APPID: "c00c33ff57d176bb8b9067612ef6ca0e"
      }
  });
  
    dispatch({
      type: "FETCH_WEATHER",
      payload: response.data
    })
  });
};
