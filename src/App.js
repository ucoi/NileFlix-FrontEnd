import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import About from './pages/About/About';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Watchlist from './pages/watchlist/Watchlist';
import Login from './pages/Login/Login';
import ActorDetails from './pages/ActorDetails/ActorDetails';
import { WatchlistProvider } from './pages/Context/WatchListContext';
import { ReviewsProvider } from './pages/Context/ReviewsContext';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <ReviewsProvider>
            <WatchlistProvider>
                <Router>
                    <Navbar setSearchQuery={setSearchQuery} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movies" element={<Movies searchQuery={searchQuery} />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/movie-details/:id" element={<MovieDetails />} />
                        <Route path="/actor-details/:id" element={<ActorDetails />} />
                        <Route path="/watchlist" element={<Watchlist />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Router>
            </WatchlistProvider>
        </ReviewsProvider>
    );
};

export default App;
