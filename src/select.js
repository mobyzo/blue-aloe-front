import React from "react";
import styled from "styled-components";
import oc from "open-color";

const MainContainer = styled.div`
  margin-top: 5vh;
  text-decoration: none;
`;
const GenreContainer = styled.div`
  margin: 5vh;
  top: 5%;
  left: 50%;
`;

const BorderedSubmit = styled.input`
  font-weight: 600;
  color: white;
  background-color: ${oc.teal[4]};
  border: 1px solid white;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  margin-right: 0.6rem;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.2s all;
  &:hover {
    background-color: #61dafb;
    color: white;
  }
  &:active {
    /* 마우스 클릭시 아래로 3px 움직임 */
    transform: translateY(3px);
  }
`;

class Select extends React.Component {
  state = { checked: {} };

  onSelectedChange = index => {
    this.setState(previousState => ({
      checked: {
        ...previousState.checked,
        [index]: !previousState.checked[index]
      }
    }));
  };

  render() {
    const { checked } = this.state;
    const checkedCount = Object.keys(checked).filter(key => checked[key])
      .length;
    const disabled = checkedCount > 1;

    return (
      <div>
        <MainContainer>
          <section class="hero">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">Choose Genre(1~2) and Country.</h1>
                <h2 class="subtitle">It makes Movie Poster Layout</h2>
              </div>
            </div>
          </section>
          <form action="/result" method="get">
            <GenreContainer>
              <div class="columns">
                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={0}
                    onChange={() => this.onSelectedChange(0)}
                    type="checkbox"
                    id="Action"
                    name="genre"
                    value="28"
                    checked={checked[0] || false}
                    disabled={!checked[0] && disabled}
                  />
                  <label for="Action">Action</label>
                </div>

                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={1}
                    onChange={() => this.onSelectedChange(1)}
                    type="checkbox"
                    id="Adventure"
                    name="genre"
                    value="12"
                    checked={checked[1] || false}
                    disabled={!checked[1] && disabled}
                  />
                  <label for="Adventure">Adventure</label>
                </div>

                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={2}
                    onChange={() => this.onSelectedChange(2)}
                    type="checkbox"
                    id="Animation"
                    name="genre"
                    value="16"
                    checked={checked[2] || false}
                    disabled={!checked[2] && disabled}
                  />
                  <label for="Animation">Animation</label>
                </div>

                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={3}
                    onChange={() => this.onSelectedChange(3)}
                    type="checkbox"
                    id="Comedy"
                    name="genre"
                    value="35"
                    checked={checked[3] || false}
                    disabled={!checked[3] && disabled}
                  />
                  <label for="Comedy">Comedy</label>
                </div>

                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={4}
                    onChange={() => this.onSelectedChange(4)}
                    type="checkbox"
                    id="Crime"
                    name="genre"
                    value="80"
                    checked={checked[4] || false}
                    disabled={!checked[4] && disabled}
                  />
                  <label for="Crime">Crime</label>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={5}
                    onChange={() => this.onSelectedChange(5)}
                    type="checkbox"
                    id="Documentary"
                    name="genre"
                    value="99"
                    checked={checked[5] || false}
                    disabled={!checked[5] && disabled}
                  />
                  <label for="Documentary">Documentary</label>
                </div>

                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={6}
                    onChange={() => this.onSelectedChange(6)}
                    type="checkbox"
                    id="Drama"
                    name="genre"
                    value="18"
                    checked={checked[6] || false}
                    disabled={!checked[6] && disabled}
                  />
                  <label for="Drama">Drama</label>
                </div>

                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={7}
                    onChange={() => this.onSelectedChange(7)}
                    type="checkbox"
                    id="Family"
                    name="genre"
                    value="10751"
                    checked={checked[7] || false}
                    disabled={!checked[7] && disabled}
                  />
                  <label for="Family">Family</label>
                </div>

                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={8}
                    onChange={() => this.onSelectedChange(8)}
                    type="checkbox"
                    id="Fantasy"
                    name="genre"
                    value="14"
                    checked={checked[8] || false}
                    disabled={!checked[8] && disabled}
                  />
                  <label for="Fantasy">Fantasy</label>
                </div>

                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={9}
                    onChange={() => this.onSelectedChange(9)}
                    type="checkbox"
                    id="History"
                    name="genre"
                    value="36"
                    checked={checked[9] || false}
                    disabled={!checked[9] && disabled}
                  />
                  <label for="History">History</label>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={10}
                    onChange={() => this.onSelectedChange(10)}
                    type="checkbox"
                    id="Horror"
                    name="genre"
                    value="27"
                    checked={checked[10] || false}
                    disabled={!checked[10] && disabled}
                  />
                  <label for="Horror">Horror</label>
                </div>

                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={11}
                    onChange={() => this.onSelectedChange(11)}
                    type="checkbox"
                    id="Musics"
                    name="genre"
                    value="10402"
                    checked={checked[11] || false}
                    disabled={!checked[11] && disabled}
                  />
                  <label for="Musics">Musics</label>
                </div>

                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={12}
                    onChange={() => this.onSelectedChange(12)}
                    type="checkbox"
                    id="Mystery"
                    name="genre"
                    value="9648"
                    checked={checked[12] || false}
                    disabled={!checked[12] && disabled}
                  />
                  <label for="Mystery">Mystery</label>
                </div>

                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={13}
                    onChange={() => this.onSelectedChange(13)}
                    type="checkbox"
                    id="Romance"
                    name="genre"
                    value="10749"
                    checked={checked[13] || false}
                    disabled={!checked[13] && disabled}
                  />
                  <label for="Romance">Romance</label>
                </div>

                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={14}
                    onChange={() => this.onSelectedChange(14)}
                    type="checkbox"
                    id="Science Fiction"
                    name="genre"
                    value="878"
                    checked={checked[14] || false}
                    disabled={!checked[14] && disabled}
                  />
                  <label for="Science Fiction">Science Fiction</label>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={15}
                    onChange={() => this.onSelectedChange(15)}
                    type="checkbox"
                    id="Thriller"
                    name="genre"
                    value="53"
                    checked={checked[15] || false}
                    disabled={!checked[15] && disabled}
                  />
                  <label for="Thriller">Thriller</label>
                </div>

                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={16}
                    onChange={() => this.onSelectedChange(16)}
                    type="checkbox"
                    id="War"
                    name="genre"
                    value="10752"
                    checked={checked[16] || false}
                    disabled={!checked[16] && disabled}
                  />
                  <label for="War">War</label>
                </div>

                <div class="column">
                  <input
                    class="is-checkradio is-circle is-success is-medium"
                    key={17}
                    onChange={() => this.onSelectedChange(17)}
                    type="checkbox"
                    id="Western"
                    name="genre"
                    value="37"
                    checked={checked[17] || false}
                    disabled={!checked[17] && disabled}
                  />
                  <label for="Western">Western</label>
                </div>
                <div class="column">
                  <div class="field">
                    <div class="control">
                      <div class="select is-success">
                        <select name="country">
                          <option value="">Select Country</option>
                          <option value="en-US">
                            United States of America
                          </option>
                          <option value="en-CA">Canada</option>
                          <option value="zh-CN">China</option>
                          <option value="ja-JP">Japan</option>
                          <option value="de-GB">United Kingdom</option>
                          <option value="ko-KR">South Korea</option>
                          <option value="fr-FR">France</option>
                          <option value="hi-IN">India</option>
                          <option value="de-GE">Germany</option>
                          <option value="en-AU">Australia</option>
                          <option value="es-MX">Mexico</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <BorderedSubmit
                    type="submit"
                    value="Start!"
                    disabled={checkedCount < 1}
                  ></BorderedSubmit>
                </div>
              </div>
            </GenreContainer>
          </form>
        </MainContainer>
      </div>
    );
  }
}
export default Select;
