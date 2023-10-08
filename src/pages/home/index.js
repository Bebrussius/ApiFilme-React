import { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn, SearchInput, SelectContainer } from "./style";
import { Link } from "react-router-dom";

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const KEY = process.env.REACT_APP_KEY;

    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const loadMovies = () => {
        let apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR`;

        // Adicione a categoria à URL se for diferente de "all"
        if (selectedCategory !== "all") {
            apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=pt-BR&with_genres=${selectedCategory}`;
        }

        // Adicione a consulta de pesquisa à URL se não estiver vazia
        if (searchQuery.trim() !== "") {
            apiUrl += `&query=${searchQuery}`;
        }

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    };

    useEffect(() => {
        // Verifique se a consulta de pesquisa não está vazia
        if (searchQuery.trim() !== "" || selectedCategory !== "all") {
            loadMovies();
        } else {
            // Se estiver vazia e a categoria for "all", carregue filmes populares
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
                .then((response) => response.json())
                .then((data) => {
                    setMovies(data.results);
                });
        }
    }, [searchQuery, selectedCategory, KEY]);

    return (
        <Container>
            <h1>Filmes</h1>
            <SearchInput
                type="text"
                placeholder="Pesquisar filmes..."
                value={searchQuery}
                onChange={handleSearchInputChange}
            />
            <SelectContainer> {/* Use o SelectContainer aqui */}
                <label htmlFor="category-select">Selecione uma categoria:</label>
                <select id="category-select" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="all">Popular</option>
                    <option value="28">Ação</option>
                    <option value="35">Comédia</option>
                    <option value="18">Drama</option>
                    <option value="10749">Romance</option>
                    <option value="27">Terror</option>
                    <option value="53">Suspense</option>
                </select>
            </SelectContainer>
            <MovieList>
                {movies.map((movie) => {
                    return (
                        <Movie key={movie.id}>
                            <img
                                src={`${imagePath}${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <span>{movie.title}</span>

                            <Link to={`/${movie.id}`}>
                                <Btn>Detalhes</Btn>
                            </Link>
                        </Movie>
                    );
                })}
            </MovieList>
        </Container>
    );
}

export default Home;
