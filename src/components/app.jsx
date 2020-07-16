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
      selectedGifId: "qNYWVh6bWa0p2"
    }
  }

  search = (query) =>{
    giphy('LnfmqGmF56YMT31NYnmrVV0bkn2ui7vm').search(query, (err, res) => {
       this.setState({
        gifs: res.data
       });
    });

  }


  render() {

    const gifs = [
      { id: "qNYWVh6bWa0p2" },
      {id: "TsHvwNpO6GYPC"},
      {id: "KpAPQVW9lWnWU"},
      {id: "mxPzDgzRCKOty"}
    ];

    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
      )
  }
}

export default App;
