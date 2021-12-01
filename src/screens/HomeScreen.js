import React from 'react'
import './HomeScreen.css';
import Nav from '../Nav'
import Banner from '../Banner'
import Rows from '../Rows';
import requests from '../Requests';
function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* <h2>Home</h2> */}

            <Nav />

            <Banner/>
            <Rows title='Netflix Original ' fetchUrl ={requests.fetchNetflixOriginals} isLargeRow/>
            <Rows title='Trending Now'      fetchUrl ={requests.fetchTending}/>
            <Rows title='Top Rated'         fetchUrl ={requests.fetchTopRated}/>
            <Rows title='Actions Movies'    fetchUrl ={requests.fetchActionMovies}/>
            <Rows title='Comedy Movies'     fetchUrl ={requests.fetchComedyMovies}/>
            <Rows title='Horron Movies'     fetchUrl ={requests.fetchHorrorMovies}/>
            <Rows title='Rumance Movies'    fetchUrl ={requests.fetchRomanceMovies}/>
            <Rows title='Documentaries'     fetchUrl ={requests.fetchDocumentaries}/>
      
        </div>
    )
}

export default HomeScreen
