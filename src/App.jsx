import { useState } from 'react'
import responseMovies from './mocks/responseMovies.json'
import { Movie } from './components/Movie'
import './styles/App.css'

export function App() {
	const [search, setSearch] = useState('')
	const movies = responseMovies.Search

	const handleChange = (e) => {
		setSearch(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(search)
	}

	return (
		<div className='absolute w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>	      		
			<div className='page'>
			<h1 className='text-white text-4xl mb-6'>Movies</h1>
				<form className='flex space-x-4' type='submit' onSubmit={handleSubmit}>
					<input
						type='text'
						className='p-2 w-full max-w-lg rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-neutral-800 text-white'
						placeholder='Search for a movie...'
						onChange={handleChange}
					/>
					<button
						type='submit'
						className='px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition'
					>
						Search
					</button>
				</form>

				<main>
					<Movie movies={movies} />
				</main>
			</div>
		</div>
	)
}
export default App
