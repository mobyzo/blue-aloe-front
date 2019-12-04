import React from "react";
import styled from "styled-components";
import { LoadingSpinner } from "./spinner.js";
import axios from "axios";
import queryString from "query-string";
import { BorderedButton } from "./header";

const Wrapper = styled.div`
  text-align: center;
  justify-content: center;
  text-decoration: none;
`;

const Positioner1 = styled.div`
  position: absolute;
  left: 25%;
  transform: translate(-50%);
`;

const Positioner2 = styled.div`
  position: absolute;
  left: 75%;
  transform: translate(-50%);
`;

const BorderedText = styled.div`
  font-weight: 600;
  color: white;
  background-color: #61dafb;
  border: 1px solid white;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  margin-right: 0.6rem;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.2s all;
`;

var moviePoster0 = "",
  moviePoster1 = "",
  moviePoster2 = "",
  moviePoster3 = "",
  moviePoster4 = "",
  moviePoster5 = "";

const selected = queryString.parse(window.location.search).genre;
const country = queryString.parse(window.location.search).country;
const apiUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=3533c246abe0c68d6a9dcc62cb323620&with_genres=" +
  selected +
  "&language=" +
  country;

const posterLayoutURL = `https://deploy-test-191113.s3.ap-northeast-2.amazonaws.com/posterLayout/layout${selected}.jpg`;
const posterResultURL = `https://deploy-test-191113.s3.ap-northeast-2.amazonaws.com/posterResults/result${selected}.jpg`;

const output = () => {
  return (
    <div>
      <div class="columns">
        <div class="column">
          <br></br>
          <Positioner1>
            <BorderedText>Poster Layout</BorderedText>
          </Positioner1>
          <br></br>
          <br></br>
          <img
            src={posterLayoutURL}
            style={{ widht: "336px", height: "504px" }}
          />
        </div>

        <div class="column">
          <br></br>
          <Positioner2>
            <BorderedText>Movie Poster Based on Our Layout</BorderedText>
          </Positioner2>
          <br></br>
          <br></br>
          <img
            src={posterResultURL}
            style={{ widht: "336px", height: "504px" }}
          />
        </div>
      </div>

      <p class="bd-notification is-danger">
        <br></br>
        <BorderedText>Reference Posters</BorderedText>
        <br></br>
      </p>
      <div class="columns">
        <div class="column">
          <img src={moviePoster0} style={{ widht: "160px", height: "240px" }} />
        </div>
        <div class="column">
          <img src={moviePoster3} style={{ widht: "160px", height: "240px" }} />
        </div>
        <div class="column">
          <img src={moviePoster1} style={{ widht: "160px", height: "240px" }} />
        </div>
        <div class="column">
          <img src={moviePoster4} style={{ widht: "160px", height: "240px" }} />
        </div>
        <div class="column">
          <img src={moviePoster2} style={{ widht: "160px", height: "240px" }} />
        </div>
        <div class="column">
          <img src={moviePoster5} style={{ widht: "160px", height: "240px" }} />
        </div>
      </div>
      <BorderedButton to="/select">Wanna see other result?</BorderedButton>
    </div>
  );
};

class Result extends React.Component {
  state = {
    isLoading: true
  };

  getMovies = async () => {
    try {
      await axios.get(apiUrl).then(function(response) {
        moviePoster0 =
          "https://image.tmdb.org/t/p/original" +
          response.data.results[0].poster_path;
        moviePoster1 =
          "https://image.tmdb.org/t/p/original" +
          response.data.results[1].poster_path;
        moviePoster2 =
          "https://image.tmdb.org/t/p/original" +
          response.data.results[2].poster_path;
        moviePoster3 =
          "https://image.tmdb.org/t/p/original" +
          response.data.results[3].poster_path;
        moviePoster4 =
          "https://image.tmdb.org/t/p/original" +
          response.data.results[4].poster_path;
        moviePoster5 =
          "https://image.tmdb.org/t/p/original" +
          response.data.results[5].poster_path;
      });
      this.setState({ isLoading: false });
    } catch (error) {
      alert("Sorry, there is no matching data.");
      window.location.href = "/select";
    }
  };

  componentDidMount = () => {
    try {
      this.getMovies();
    } catch (error) {
      alert("Sorry, Error");
    }
  };

  render() {
    const { isLoading } = this.state;
    return <Wrapper>{isLoading ? LoadingSpinner() : output()}</Wrapper>;
  }
}

export default Result;
