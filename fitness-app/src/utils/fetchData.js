export const excerciseOptions = {
  method: "GET",
  // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    "X-RapidAPI-Key": "093b074c8fmshc1929c059b50834p1688fajsn7bf39ee12995",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "093b074c8fmshc1929c059b50834p1688fajsn7bf39ee12995",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
