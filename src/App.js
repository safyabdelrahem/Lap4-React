import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar/nav';
import Home from './components/home/home';
import MoviesList from './components/Movies/movies';
import MovieDetails from './components/movieDetails/movieDet';
import { LanguageProvider } from './components/language/language';
import Favorites from './components/favmovie/fav';
const apiKey = '3b96b6fa293869b10cc58bdc9bfdb6eb';
const App = () => {
  return (
    <LanguageProvider> 
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesList apiKey={apiKey} />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
         </LanguageProvider>
  );
};
export default App;
