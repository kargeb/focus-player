import ReactPlayer from 'react-player/youtube';

const Film = () => {
  console.log('jestem w filmie');

  return (
    <div>
      <p>JEST FILM</p>
      <ReactPlayer url="https://www.youtube.com/watch?v=iIhOfk5IEQg" controls />
    </div>
  );
};

export default Film;
