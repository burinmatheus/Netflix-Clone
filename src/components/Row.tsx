import React, { useEffect } from "react";
import { getMovies } from "../api/tmdb";

import "./Row.css";

type PropsType = {
    category: string, 
    title: string, 
    isLarge: boolean
};

type MovieType = {
    id: number,
    title: string,
    poster_path: string,
    backdrop_path: string,
};

export default function Row({category, title, isLarge} : PropsType) {
    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
        fetchMovies(category);
    }, [category]);

    const fetchMovies = async (_category:string) => {
        const data = await getMovies(_category);
        setMovies(data?.results);
    };

    return(
        <div className="row-container">
            <h2 className="row-header">{title}</h2>
            <div className="row-cards">
                {
                    movies?.map(({id, title, poster_path, backdrop_path}:MovieType) => {
                        return (
                            <div className={`movie-card ${isLarge && "movie-card movie-card-large"}`} key={id}>
                                <img src={`https://image.tmdb.org/t/p/w500${isLarge ? backdrop_path: poster_path}`} title={title} alt={title}/>
                            </div>
                        );
                    })
                }  
            </div>          
        </div>
    );
}