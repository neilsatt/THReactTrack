import React, {Component, PropTypes} from 'react';
import { bindActionCreators} from 'redux';
import {connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import Stopwatch from '../components/Stopwatch';
import Counter from '../components/Counter';
import Stats from '../components/Stats';
import AddPlayerForm from '../components/AddPlayerForm';
import Player from '../components/Player';
import Header from '../components/Header';



class Scoreboard extends Component{
   static propTypes = {
      players: PropTypes.array.isRequired
   };

  render () {

    const {dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.switch}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />
    ))
    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
            {playerComponents}
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
};

const mapStateToProps = state => (
  {
    players: state
  }
);

/* Subscribe Scoreboard to any changes in state or any Redux store updates
   results passed as a prop to scoreboard.
   Any time our underlying player state changes,
   it will be mapped to a property called players.
   That is injected into our Scoreboard container making it
   available to any downstream components.
 */
export default connect(mapStateToProps)(Scoreboard);
