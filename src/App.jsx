import { Movie } from './components/Movie'
import { Header } from './components/Header'
import './styles/App.css'
import { useMovies } from './hooks/useMovies'

export function App() {
	const { movies, getMovies } = useMovies()
	return (
		<div className='absolute w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
			<div className='page'>
				<Header getMovies={getMovies} />
				<main>
					<Movie movies={movies} />
				</main>
			</div>
		</div>
	)
}
export default App
