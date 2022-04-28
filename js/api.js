const BASE_URL = "https://rickandmortyapi.com/api/";

export const getCharacters = async () => {
  const response = await fetch(`${BASE_URL}character`);
  const characters = await response.json();
  return characters;
};
