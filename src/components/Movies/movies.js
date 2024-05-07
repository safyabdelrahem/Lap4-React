import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import MoviesPagination from '../moviepagination/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.movies.favoriteMovies);

    const updateMovies = (page) => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3b96b6fa293869b10cc58bdc9bfdb6eb&page=${page}`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        updateMovies(1);
    }, []);

    const handleDetailsClick = (movie) => {
        navigate(`/movies/${movie.id}`);
    };

    const handleAddToFavorites = (movie) => {
        const isFavorite = favorites.find(fav => fav.id === movie.id);
        
        if (isFavorite) {
           
            const updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
            dispatch({ type: 'movies/setFavoriteMovies', payload: updatedFavorites });
        } else {
         
            dispatch({ type: 'movies/addFavoriteMovie', payload: movie });
        }
    };

    const handleRemoveFromFavorites = (movie) => {
        dispatch({ type: 'movies/removeFavoriteMovie', payload: movie });

     
        setMovies(prevMovies => prevMovies.filter(prevMovie => prevMovie.id !== movie.id));
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Popular Movies</h1>
            <div className="row">
                {movies.map(movie => (
                    <div key={movie.id} className="col-md-3 mb-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.release_date}</p>
                                <p className="card-text">{movie.overview}</p>
                                {favorites.find(fav => fav.id === movie.id) ? (
                                    <button className="btn btn-danger" onClick={() => handleRemoveFromFavorites(movie)}>
                                        <FontAwesomeIcon icon={faHeart} className="mr-2" />
                                    </button>
                                ) : (
                                    <button className="btn btn-primary m-5" onClick={() => handleAddToFavorites(movie)}>
                                        <FontAwesomeIcon icon={faHeart} className="mr-2" />
                                        Fav
                                    </button>
                                )}
                                <button className="btn btn-primary ml-2" onClick={() => handleDetailsClick(movie)}>Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <MoviesPagination updateMovies={updateMovies} />
        </div>
    );
};

export default Movies;
