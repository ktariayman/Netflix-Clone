import React , {useState,useEffect}from 'react'
import './Rows.css'
import axios from './axios'
import requests from './Requests'
function Rows( {title , fetchUrl , isLargeRow = false}) {
    const [movies , setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original";
    useEffect(() => {
        async function fetchData(){
            const request = await  axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
    fetchData()
    },[fetchUrl])
    // console.log(movies)

    return (
        <div className="rows">
            <h2>{title }</h2>
            <div className="row__posters">
            {movies.map(
                movie => (
                ((isLargeRow && movie.poster_path) || 
                (!isLargeRow && movie.backdrop_path)) && (
                <div>
                    <img  
                        className = {`row__poster ${isLargeRow && "row__posterLarge"}`} 
                        key={movie.id}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name} />
                    <h4 className="movie__name">{movie?.name}</h4>
                </div>
            )))} 
            </div>
        </div>
    )
}

export default Rows
