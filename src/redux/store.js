import { configureStore } from "@reduxjs/toolkit";
import movieSlice from '../slice'
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        movies: movieSlice
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(logger)
})

export default store;