import React from 'react';
import logo from './logo.svg';
import './App.css';


function CounterHeader (props) {

  const { cnt, name } = props;

  return (<h4>This is counter value: { cnt }, n = { name }</h4>)
}

export class AppClass extends React.Component {// классовый React-компонент

  // стейт - это переменные, которые учавствуют во внутренней логике, влияющей на перерисовку компонента
  state = { // первый вариант объявить стейт компонента
    counter: 0,
  };

  // constructor(props) {
  //   super(props);
  //
  //   this.state = { // второй вариант объявить стейт компонента (через конструктор)
  //     counter: 0,
  //   }
  // }

  handleButtonClick = () => {
    console.log("Yo!!! Кликнули на баттон!");

    let { counter } = this.state;

    counter++;

    this.setState({ counter } )

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1>Class-based component</h1>

          <CounterHeader cnt={ this.state.counter } name="Some React name"   />

          <input type="button" onClick={ this.handleButtonClick } value="Increment" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

function App() { // функциональный React-компонент

  return (
    <div className="App">
      <AppClass />
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <h1>Functional component</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



