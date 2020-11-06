const createThumbnail = (url) => {
  const matcherWatch = 'watch?v=';
  const matcherBe = '.be/';
  const unknownUrl = 'https://via.placeholder.com/320x180?text=No+Thumbnail';
  let videoId = null;

  if (url.includes(matcherWatch)) {
    videoId = url.substr(url.indexOf(matcherWatch) + matcherWatch.length, 11);
  } else if (url.includes(matcherBe)) {
    videoId = url.substr(url.indexOf(matcherBe) + matcherBe.length, 11);
  } else {
    return unknownUrl;
  }

  /*
    StackOverflow: How do I get a YouTube video thumbnail from the YouTube API?
    https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
    https://i.ytimg.com/vi/<VIDEO ID>/mqDefault.jpg -> 320 | 180 resolution
  */
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;

  return thumbnail;
};

export default createThumbnail;
