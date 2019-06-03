import React, { Component } from 'react';
import { connect } from 'react-redux';
import { feed, play, tick } from "./actions";
import Button from './components/button/button';
import Meter from './components/meter/meter';
import './App.css';

class App extends Component {

  state = {
    interval: setInterval(this.props.tick, 1000),
    emojis: ["😵","😩","😐","🙂","😄"]
  }
  componentWillUnmount() {
    clearInterval(this.state.interval)
  }


  render() {
    
    return (
      <div>
      <h1 className="header">Hi, please take care of me! </h1>
      <div className="main">
        {this.props.reducer.emoji === 0 ? (
        <div>
          <span className="emoji" role="img">{this.state.emojis[this.props.reducer.emoji]}</span>
          <h1>GAME OVER!!!!</h1>
        </div>
      ) : (
        <div>
          <span className="emoji" role="img">{this.state.emojis[this.props.reducer.emoji]}</span>
          <br />
          <Meter value={this.props.reducer.hunger}/>
          <br />
          <Button onClick={this.props.feed} text="FEED 🍕" />
          <br />
          <Meter value={this.props.reducer.engagement}/>
          <br />
          <Button onClick={this.props.play} text="PLAY 🎳" /> 
        </div>
      )}
      </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    reducer: state.reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    feed: () => {
      dispatch(feed());
    },
    play: () => {
      dispatch(play());
    },
    tick: () => {
      dispatch(tick());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
