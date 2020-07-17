import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }


  search = (query) =>{
    giphy('LnfmqGmF56YMT31NYnmrVV0bkn2ui7vm').search(query, (err, res) => {
       this.setState({
        gifs: res.data
       });
    });
  }



  render() {

    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}  />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
      )
  }
}

export default App;
