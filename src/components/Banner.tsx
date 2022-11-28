import React, { useEffect } from "react";
import { getMovies } from "../api/tmdb";

import './Banner.css';

import { ReactComponent as Assets_info_icon } from '../../assets/img/info_icon.svg';
import { ReactComponent as Assets_play_icon } from '../../assets/img/play_icon.svg';

export default function Banner() {
    const [movie, setMovie] : [any, any]= React.useState([]);

    useEffect(() => {
        fetchMovies("originals");
    }, []);

    const fetchMovies = async (_category:string) => {
        const data = await getMovies(_category);
        var randomMovie;
        var i = 0;
        while(i <= data?.results.length){
            randomMovie = data?.results[Math.floor(Math.random() * data?.results.length - 1)];
            if(randomMovie.backdrop_path && randomMovie.overview){
                break;
            }
            i++;
        }
        setMovie(randomMovie);
    };

    const truncate = (str:string, n:number) => {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    };

    return (
        <header className="banner-container" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "top center",
        }}>
            <div className="banner-content">
                <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <h2 className="banner-description">{truncate(movie?.overview, 200)}</h2>
                <div className="banner-buttons">
                    <button className="banner-button button-assistir">
                        <Assets_play_icon/>
                        Assistir
                    </button>
                    <button className="banner-button">
                        <Assets_info_icon/>
                        Mais Informações
                    </button>
                </div>
            </div>
        </header>
    );
}