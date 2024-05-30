import { useSearch } from '../hooks/useSearch'
import cinema from '../assets/cinema.png'
export function Header({ getMovies }) {
	const { handleSubmit, handleChange, error } = useSearch({ getMovies })
	return (
		<div className='flex flex-col items-center mt-10 space-y-6'>
			<div className='flex items-center space-x-4 mb-6'>
				<img src={cinema} alt='logo' className='w-16 h-16' />
				<h1 className='text-white text-5xl font-bold tracking-wide'>
					Movie Bunker
				</h1>
			</div>
			<form
				className='flex items-center space-x-4 w-full max-w-2xl'
				type='submit'
				onSubmit={handleSubmit}
			>
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
			{error && (
				<p className='flex items-center p-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 mt-10'>
					{error}
				</p>
			)}
		</div>
	)
}
