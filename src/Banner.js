import React , {useEffect , useState}from 'react'
import './Banner.css'
import requests from './Requests';
import axios from './axios';

function Banner() {
    const [movie,setMovie] = useState([]);
    useEffect(() => {
        async function fetchDate() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            )
            return request;
        }
        fetchDate();
    }, [])
    console.log(movie)
    function truncate(string , n){
        return string?.length > n ? 
            string.substr(0,n-1) + '...'
            :
            string 
    } 
    return (
        <header className="banner" style={{
            backgroundPosition:"center center",
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
        }}>
            <div className="banner__content">
                <h1 className="banner__title">{movie?.title || movie?.name ||movie?.original_name}</h1>
                <div className="banner__butons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My list</button>
                </div>
                    <h1 className="banner__description">
                    {truncate ( movie?.overview, 150)} </h1>
            </div>
            <div className="banner__fadeBottom" />       

        </header>

    )
}

export default Banner ;
