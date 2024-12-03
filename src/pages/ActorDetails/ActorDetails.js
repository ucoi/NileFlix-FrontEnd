// src/pages/ActorDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ActorDetails.css';

const API_KEY = '11c7aba54522527e7f5806af9ca802a7'; // Your TMDb API key

const ActorDetails = () => {
    const { id } = useParams(); // Get the actor ID from the URL
    const [actor, setActor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchActorDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`);
                if (!response.ok) {
                    throw new Error('Failed to fetch actor details');
                }
                const data = await response.json();
                setActor(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchActorDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!actor) {
        return <div>Actor not found</div>;
    }

    return (
        <div className="actor-details">
            <div className="actor-header">
                <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} className="actor-photo" />
                <div className="actor-info">
                    <h1>{actor.name}</h1>
                    <p>Born: {actor.birthday}</p>
                    <p>Place of Birth: {actor.place_of_birth}</p>
                    <p>{actor.biography}</p>
                </div>
            </div>
        </div>
    );
};

export default ActorDetails;
