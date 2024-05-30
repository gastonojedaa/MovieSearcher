import { useState } from 'react'
export function Header({ getMovies }) {
	//custom hooks
	const [search, setSearch] = useState('')

	const handleChange = (e) => {
		setSearch(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		getMovies(search)
	}

	return (
		<>
			<h1 className='text-white text-4xl mb-6'>Movie Bunker</h1>
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
		</>
	)
}
