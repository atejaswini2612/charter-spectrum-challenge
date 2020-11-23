const API_PATH = "https://code-challenge.spectrumtoolbox.com/api/restaurants";

export const getRestaurants = async () => {
  const response = await fetch(API_PATH, {
    headers: { Authorization: "Api-Key q3MNxtfep8Gt" }
  });
  return await response.json();
};
