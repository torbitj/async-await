const DogImage = () => {
  const $dogImage = document.createElement(`img`);
  $dogImage.alt = `Random dog image`;
  $dogImage.src = (getDogImage());
}

const rendor = () => {
  const $app = document.querySelector(`#app`);
  $app.innerHTML = `
    <h1>Dog Images</h1>
    <DogImage></DogImage>`;
}

rendor();