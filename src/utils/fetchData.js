export const exerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '7d22f13bbamsh6b71f464e20f31ep12942fjsn3d19abb65b05',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      
  };

  export const  youtubeOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7d22f13bbamsh6b71f464e20f31ep12942fjsn3d19abb65b05',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };