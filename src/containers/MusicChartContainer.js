import React, {Component} from 'react';
import '../App.css';
import MusicChartList from '../components/MusicChartList.js'

class MusicChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charts: [],
      selectedTrackName: '',
      selectedTrack: null
    };
  }

  async componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    const res = await fetch(url)
    const charts = await res.json()

    this.setState({
      charts: charts.feed.entry
    })
  }

  render() {
    return (
      <div>
        <h2>Top 20 Music Charts</h2>
        <MusicChartList tracks={this.state.charts}/>
      </div>
    )
  }


}

export default MusicChartContainer;
