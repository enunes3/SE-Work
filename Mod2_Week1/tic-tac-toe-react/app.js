class Square extends React.Component {
  render () {
    return (
      <div>
        <h4>square</h4>
      </div>
    )
  }
}

class Board extends React.Component {
  render () {
    return (
      <div className='board'>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    )
  }
}

class Player extends React.Component {
  render(){
    return (
      <div>
        <h2>Player {this.props.id} </h2>
        <h3>Wins: </h3>
      </div>
    )
  }
}

class Header extends React.Component {
  render(){
    return (
        <h1 > React Tac Toe< /h1>
    )
  }
}

  //importing React.Component library line 8 in index.html
class App extends React.Component{
  //class MUST have a render function -- so a Component must render some view
  render(){
    return (
    <div>
      <Header />
      <Player id='O' />
      <Player id='X' />
      <Board />
    </div>
    )
  }
}

  //importing ReactDOM library line 9 in index.html
ReactDOM.render(
  //the contentnent we want to display
  <App />,
  //where we are trying to place the content
  document.querySelector('.container')
);
