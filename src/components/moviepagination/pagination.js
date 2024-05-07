import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const MoviesPagination = ({ updateMovies }) => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };

    useEffect(() => {
        updateMovies(page);
    }, [page, updateMovies]);

    const handleAddToFavorites = (movie) => {
        dispatch({ type: 'movies/addFavoriteMovie', payload: movie });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Prev
        </button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    );
}

export default MoviesPagination;
