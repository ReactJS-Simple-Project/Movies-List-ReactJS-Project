import { React, useState } from "react"
import { useDispatch } from "react-redux"
import { fetchMovies } from "./slice"

const Search = () => {
    const dispatch = useDispatch()

    const defaultInputSearch = {
        search: ''
    }
    const [inputSearch, setInputSearch] = useState(defaultInputSearch)


    const handleChange = (e) => {
        setInputSearch({
            ...inputSearch,
            [e.target.name]: e.target.value
        })
    }

    const submit = () => {
        dispatch(fetchMovies(inputSearch.search))
        setInputSearch(defaultInputSearch)

    }

    return (
        <div className="search">
            <input type="text"
                placeholder="Search..."
                name="search"
                value={inputSearch.search}
                onChange={handleChange}
            />
            <input type="submit" placeholder="Search" onClick={submit} />

        </div>
    )
}

export default Search