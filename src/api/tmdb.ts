import axios from "axios";

export const getMovies = async (category: string) => {
    try{
        const retorno = await fetch(
            `https://api.themoviedb.org/3${categories.find((cat) => cat.name === category)?.fetchUrl}`
        );
        return await retorno.json();
    } catch (error) {
        console.log('Error getMovies:' + error);
    }
};

type CategoryType = [...{name: string; title: string; fetchUrl: string; isLarge:boolean}[]];

const categories:CategoryType = [
    {
        name: 'trending',
        title: 'Em Alta',
        fetchUrl: `/trending/all/week?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: true,
    },
    {
        name: 'originals',
        title: 'Originais Netflix',
        fetchUrl: `/discover/tv?with_network=213&language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
    {
        name: 'toprated',
        title: 'Melhores Avaliados',
        fetchUrl: `/movie/top_rated?language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
    {
        name: 'action',
        title: 'Ação',
        fetchUrl: `/discover/movie?with_genres=28&language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
    {
        name: 'comedy',
        title: 'Comédia',
        fetchUrl: `/discover/movie?with_genres=35&language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
    {
        name: 'horror',
        title: 'Terror',
        fetchUrl: `/discover/movie?with_genres=27&language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
    {
        name: 'romance',
        title: 'Romance',
        fetchUrl: `/discover/movie?with_genres=10749&language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
    {
        name: 'documentaries',
        title: 'Documentários',
        fetchUrl: `/discover/movie?with_genres=99&language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
    {
        name: 'animation',
        title: 'Animação',
        fetchUrl: `/discover/movie?with_genres=16&language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
    { 
        name: 'drama',
        title: 'Drama',
        fetchUrl: `/discover/movie?with_genres=18&language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
    {
        name: 'crime',
        title: 'Crime',
        fetchUrl: `/discover/movie?with_genres=80&language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
    {
        name: 'thriller',
        title: 'Thriller',
        fetchUrl: `/discover/movie?with_genres=53&language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
    {
        name: 'mystery',
        title: 'Mistério',
        fetchUrl: `/discover/movie?with_genres=9648&language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
    {
        name: 'sci-fi',
        title: 'Ficção Científica',
        fetchUrl: `/discover/movie?with_genres=878&language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
    {
        name: 'adventure',
        title: 'Aventura',
        fetchUrl: `/discover/movie?with_genres=12&language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
    {
        name: 'family',
        title: 'Família',
        fetchUrl: `/discover/movie?with_genres=10751&language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
    {
        name: 'fantasy',
        title: 'Fantasia',
        fetchUrl: `/discover/movie?with_genres=14&language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
    {
        name: 'history',
        title: 'História',
        fetchUrl: `/discover/movie?with_genres=36&language=pt-BR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        isLarge: false,
    },
];

export default categories;
