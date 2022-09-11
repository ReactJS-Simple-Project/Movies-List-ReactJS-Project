import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./slice";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Movie = () => {
    const movieLists = useSelector(state => state.movies.movieLists)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchMovies("man"))
    }, [])

    if (movieLists.error.message) {
        return (
            <div role="alert">
                Something went wrong
            </div>
        )
    }

    return (
        <div className="movies">
            {
                movieLists.isLoading ?
                    <div>
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                        ...Loading</div>
                    :
                    movieLists.data.map((movie) => {
                        return (
                            <div className="movie" key={movie.imdbID}>
                                <p>{movie.Title}</p>
                                <img width="200px" height="200px" alt={movie.Title}
                                    src={movie.Poster === "N/A"
                                        ?
                                        "https://m.media-amazon.com/images/M/MV5BMTUyODU2NjM0Ml5BMl5BanBnXkFtZTcwMTUzMTA0MQ@@._V1_SX300.jpg"
                                        : movie.Poster} />
                            </div>
                        )
                    })
            }
        </div>

    )
}

export default Movie;