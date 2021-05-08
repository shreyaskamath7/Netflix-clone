import React from 'react'
import "./HomeScreen.css"
import Nav from "./Nav"
import Banner from './Banner'
import Row from './Row';
import requests from './Requests'
const Homescreen = () => {
    return (
        <div classname="homescreen">
           
            <Banner/>
            <Row title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
             <Row title="Trending Now" fetchUrl={requests.fetchTrending}/> 
             <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/> 
             <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/> 
             <Row title="comedy Series" fetchUrl={requests.fetchComedyMovies} /> 
             <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/> 
             <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
             <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

        </div>
        
        
    )
}

export default Homescreen
