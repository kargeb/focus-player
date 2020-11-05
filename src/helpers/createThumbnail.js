const createThumbnail = (url) => {
  const matcherWatch = 'watch?v=';
  const matcherBe = '.be/';
  let videoId = null;

  console.log('URL z createThumbnail: ', url);

  if (url.includes(matcherWatch)) {
    videoId = url.substr(url.indexOf(matcherWatch) + matcherWatch.length, 11);
  } else if (url.includes(matcherBe)) {
    videoId = url.substr(url.indexOf(matcherBe) + matcherBe.length, 11);
  } else {
    //   videoId = 'wrong adress';
    return null;
  }

  const thumbnail = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;

  console.log('jestem w create thumbnail z takim linkiem:', url);

  console.log(videoId);

  return thumbnail;
  //   https://i.ytimg.com/vi/<VIDEO ID>/mqdefault.jpg
};

export default createThumbnail;
