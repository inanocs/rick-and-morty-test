import { getCharacters } from "./api.js";

const LIST_NODE = document.getElementById("characters-list");

const postConstruct = async () => {
  const characters = await getCharacters();
  mapCharactersToHtml(characters.results);
};

const createCharacterListItem = (character) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = character.image;
  img.alt = `character ${character.name}`;
  const p = document.createElement("p");
  p.textContent = character.name;

  li.appendChild(img);
  li.appendChild(p);
  return li;
};

const mapCharactersToHtml = (characters) => {
  const fragment = new DocumentFragment();
  characters.map(createCharacterListItem).forEach((characterNode) => {
    fragment.appendChild(characterNode);
  });

  LIST_NODE.appendChild(fragment);
};

window.addEventListener("DOMContentLoaded", () => {
  postConstruct();
});
