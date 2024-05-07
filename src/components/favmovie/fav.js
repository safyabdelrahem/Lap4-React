
import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = () => {
    const favoriteMovies = useSelector(state => state.movies.favoriteMovies);

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Favorite Movies</h1>
            <div className="row">
                {favoriteMovies.map(movie => (
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
