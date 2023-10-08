import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import YouTube from "react-youtube"; // Importe o YouTube
import "./styles.css";
import axios from "axios";

const Movie = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [trailerUrl, setTrailerUrl] = useState("");

    const [movie, setMovie] = useState([]);
    const KEY = process.env.REACT_APP_KEY;
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
        )
            .then((response) => response.json())
            .then((data) => {
                const res = data.results;
                let filme = res.find((key) => {
                    // eslint-disable-next-line
                    return key.id == id;
                });
                setMovie(filme);
            }); // eslint-disable-next-line
    }, []);

    const fetchTrailerUrl = async () => {
        try {
            // Use a API do TMDb para obter informações do vídeo (trailer)
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}&language=en-US`
            );
    
            // Verifique se há resultados de vídeos
            if (response.data.results.length > 0) {
                // Use o primeiro vídeo da lista (pode ajustar para diferentes condições)
                const videoKey = response.data.results[0].key;
    
                // Construa o URL do vídeo do YouTube
                const youtubeUrl = `https://www.youtube.com/watch?v=${videoKey}`;
    
                setTrailerUrl(youtubeUrl);
            } else {
                setTrailerUrl(""); // Se não houver vídeo, defina o URL como vazio
            }
        } catch (error) {
            console.error("Erro ao buscar o trailer:", error);
        }
    };

    useEffect(() => {
        // Chame a função para buscar o URL do trailer
        fetchTrailerUrl();
    }, []);
    
    return (
        <div className="container-pai">
            <nav>
                <h1>Filme</h1>
            </nav>
            <img
                className="img_movie"
                src={`${imagePath}${movie.poster_path}`}
                alt="{movie.title}"
            />
            <div className="container">
                <h1>{movie.title}</h1>
                <h3>Data de lançamento: {movie.release_date}</h3>
                <div className="descricao">
                    <h4>Descrição: </h4>
                    <p className="movie-desc">{movie.overview}</p>
                </div>
                <Link to="/">
                    <button className="link_button">Voltar</button>
                </Link>
            </div>

            {trailerUrl && (
                <div className="trailer">
                    <YouTube
                        videoId={trailerUrl.split("v=")[1]} // Pega apenas o ID do vídeo
                        opts={{ width: "100%", height: "400px" }} // Ajuste as dimensões conforme necessário
                    />
                </div>
            )}
        </div>
    );
};

export default Movie;
