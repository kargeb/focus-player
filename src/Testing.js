import React from 'react';

const Testing = () => {
  const handleClick = () => {
    fetch(
      'https://www.googleapis.com/youtube/v3/videos?id=jgv6q6SFB6o&key=AIzaSyBmuekVaGQbj59-VsA24idsHR5iDmv7Qso&part=snippet,contentDetails,statistics,status',
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Jestesmy w testing</h1>
        <button type="button" className="button is-primary" onClick={handleClick}>
          Get data
        </button>
      </div>
    </section>
  );
};

export default Testing;
