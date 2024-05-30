const API_KEY = '4287ad07';
export const fetchMovies = async (search) => {
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
    const json = await response.json()
    const movies = json.Search

   return movies || []
}