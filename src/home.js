import React from "react";
import styled from "styled-components";
import { BorderedButton } from "./header";

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  justify-items: center;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20vh;
  margin-bottom: 10vh;
`;

class Home extends React.Component {
  render() {
    return (
      <div>
        <Wrapper>
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-6">
              <p class="bd-notification">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2 class="title is-2">Make a poster with DEYPO</h2>
                <h4 class="title is-4">
                  An AI-based poster design layout <br></br>
                  will transform the way<br></br>
                  design your movie poster
                </h4>
                <BorderedButton to="/select">Let's Try Our Demo</BorderedButton>
              </p>
            </div>
            <div class="column is-5"></div>
          </div>
        </Wrapper>

        <Wrapper>
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-6">
              <div class="column">
                <img
                  alt="movie patterns"
                  src="https://deploy-test-191113.s3.ap-northeast-2.amazonaws.com/assets/img/%ED%8F%AC%EC%8A%A4%ED%84%B0+%ED%8C%A8%ED%84%B4.png"
                />
              </div>
            </div>
            <div class="column is-4">
              <p class="bd-notification">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <h4 class="title is-4">
                  Movie poster has some patterns. Each poster has a common
                  structure, color, and similar elements.
                </h4>
              </p>
            </div>
            <div class="column is-1"></div>
          </div>
        </Wrapper>

        <Wrapper>
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-6">
              <div class="column">
                <img
                  alt="component analyze"
                  src="https://deploy-test-191113.s3.ap-northeast-2.amazonaws.com/assets/img/%ED%8F%AC%EC%8A%A4%ED%84%B0+%EC%9A%94%EC%86%8C%EB%B6%84%EC%84%9D.png"
                />
              </div>
            </div>
            <div class="column is-5">
              <p class="bd-notification">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2 class="title is-2"></h2>
                <h4 class="title is-4">
                  Our AI analyzes the elements of the movie poster each genre
                  and country.
                </h4>
              </p>
            </div>
          </div>
        </Wrapper>

        <Wrapper>
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-5">
              <p class="bd-notification">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2 class="title is-2"></h2>
                <h4 class="title is-4">
                  Based on analysis, AI shows movie poster layout.
                </h4>
              </p>
            </div>
            <div class="column is-6"></div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Home;
