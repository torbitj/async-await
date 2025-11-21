const state = {
  docImage: null
}

const getDogImage = async () => {
  const API = `https://dog.ceo/api/breeds/image/random`;
  const response = await fetch(API);
  const data = await response.json();
  state.docImage = data.message;
}

const DogImage = () => {
  const $dogImage = document.createElement(`img`);
  $dogImage.alt = `Random dog image`;
  $dogImage.src = state.docImage;
  return $dogImage;
}

const rendor = () => {
  const $app = document.querySelector(`#app`);
  $app.innerHTML = `
    <h1>Dog Images</h1>
    <DogImage></DogImage>`;

  document.querySelector(`DogImage`).replaceWith(DogImage());
}

const init = async () => {
  await getDogImage();
  rendor();
}

init();