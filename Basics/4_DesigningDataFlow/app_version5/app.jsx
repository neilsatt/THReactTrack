var PLAYERS = [
  {
    name: "Cormac McCarthy",
    score: 31,
    id: 1,
  },
  {
    name: "Craig Johnson",
    score: 35,
    id: 2,
  },
  {
    name: "Dorothy Johnson",
    score: 42,
    id: 3,
  },
  {
    name: "Leslie Silko",
    score: 49,
    id: 4,
  },
];

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};


/* Revert the counter back into a functional component 
   and relocate the state up into the application

   A stateless component 
*/

function Counter(props){
        return (
            <div className="counter">
              <button className="counter-action decrement" > - </button>
              <div className="counter-score"> {props.score} </div>
              <button className="counter-action increment" > + </button>
            </div>
      );
}



Counter.propTypes = {
    score: React.PropTypes.number.isRequired
}

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
};


/* 
Convert app back into a stateful component that holds app state
    This is where we manage state, because players can Change
*/ 

var Application = React.createClass({
     propTypes: {
      title: React.PropTypes.string,
      initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired,
      })).isRequired,
    },
    
    getDefaultProps: function() {
        return  {
            title: "Scoreboard",
        }
    },
    
    getInitialState: function() {
        return {
            players: this.props.initialPlayers,
        };
    },
    
    render: function() {
     return (
        <div className="scoreboard">
          <Header title={this.props.title} />

          <div className="players">
            {this.state.players.map(function(player) {
              return <Player name={player.name} score={player.score} key={player.id} />
            })}
          </div>
        </div>
  );
 }   
});


ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.getElementById('container'));