import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3b96b6fa293869b10cc58bdc9bfdb6eb`)
            .then(response => response.json())
            .then(data => setMovieDetails(data))
            .catch(error => console.error(error));
    }, [id]);

    if (!movieDetails) return <div>Loading...</div>;

    const {
        title,
        overview,
        release_date,
        poster_path,
        vote_average,
        genres,
        runtime,
        production_companies,
        homepage
    } = movieDetails;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title}
                        style={{ maxWidth: '100%' }}
                    />
                </div>
                <div className="col-md-8">
                    <h1>{title}</h1>
                    <p><strong>Overview:</strong> {overview}</p>
                    <p><strong>Release Date:</strong> {release_date}</p>
                    <p><strong>Vote Average:</strong> {vote_average}</p>
                    <p><strong>Genres:</strong> {genres.map(genre => genre.name).join(', ')}</p>
                    <p><strong>Runtime:</strong> {runtime} minutes</p>
                    <p><strong>Production Companies:</strong> {production_companies.map(company => company.name).join(', ')}</p>
                    {homepage && <p><a href={homepage} target="_blank" rel="noopener noreferrer">Official Website</a></p>}
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
