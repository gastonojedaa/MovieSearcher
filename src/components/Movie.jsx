import '../styles/Movie.css'
export function responseMovies({ movies }) {
	return (
		<>
			<ul className='grid grid-cols-3 gap-4 mt-10'>
				{movies.map((movie) => (
					<li key={movie.Title} className='movie relative group rounded-xl'>
						<h2>{movie.Title}</h2>
						<img src={movie.Poster} alt={movie.Title} />
						<p>{movie.Year}</p>
						<div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl'>
							<a href='http://www.youtube.com' target="_blank" rel="noopener noreferrer">
								<button className='px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition'>
									Watch Trailer
								</button>
							</a>
						</div>
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
