import { useEffect, useState } from 'react'
import { fetchMovies } from '../services/movie'

export function useMovies() {
	const [movies, setMovies] = useState('')

	const getMovies = async (search) => {
		const newSearch = await fetchMovies(search)
		setMovies(newSearch)
	}

	useEffect(() => {
		getMovies('avengers')		
	},[])

	return { movies, getMovies }
}
