export const getAllFilms = () => {
  console.log('pobralem wszystkie');
  fetch('https://agile-depths-96654.herokuapp.com/v1/movies')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      return data;
    });
};

export const func = () => {};
