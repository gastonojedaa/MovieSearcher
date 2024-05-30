import { useEffect, useState } from 'react'

export function useSearch({ getMovies }) {
	const [search, setSearch] = useState('')
	const [error, setError] = useState(null)

	const handleChange = (e) => {
		setSearch(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		getMovies(search)
	}

	useEffect(() => {
		if (search.length < 3) {
            setError('The movie name must be at least 3 characters long.')
            return
		}
        if(search.length > 20){
            setError('The movie name must be less than 20 characters long.')
            return
        }
        if (search.match(/[^a-zA-Z0-9 ]/)) {
            setError('The movie name must contain only letters and numbers.')
            return
        }
        setError(null)

	}, [search])

	return { search, handleChange, handleSubmit, error}
}
