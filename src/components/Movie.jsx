import '../styles/Movie.css'
export function responseMovies({ movies }) {
	return (
		<>
			<ul className='grid grid-cols-3 gap-4 mt-10'>
				{movies.map((movie) => (
					<li key={movie.Title} className='movie'>
						<h2>{movie.Title}</h2>
						
						<img src={movie.Poster} alt={movie.Title} />
					</li>
				))}
			</ul>
		</>
	)
}
export function Movie({ movies }) {
	const hasMovies = movies.length > 0
	return hasMovies ? responseMovies({ movies }) : <p>No movies found</p>
}
