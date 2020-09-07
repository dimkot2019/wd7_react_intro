import React, { Fragment } from 'react';
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
    data: {
      userName: "",
      userAgeRange: "",
      userActiveStudent: "",
    },
  };

  // constructor(props) {
  //   super(props);
  //
  //   this.state = { // второй вариант объявить стейт компонента (через конструктор)
  //     counter: 0,
  //   }
  // }

  getSelectOptions = () => {
    return ['20-30', '30-40', '40-50', '50+'];
  }

  handleButtonClick = () => {
    console.log("Yo!!! Кликнули на баттон!");

    let { counter } = this.state;

    counter++;

    this.setState({ counter } )

  }

  handleChangeInput = (e) => {
    const { target } = e;
    this.setState({ textVal: target.value } )
  };

  handleChange = (e) => {
    const {target} = e;

    // console.log("TARGET: ", target);
    // console.log("TARGET type: ", target.type);
    // console.log("TARGET checked: ", target.checked);
    // console.log("TARGET value: ", target.value);

    const value = target.type === 'checkbox' ? target.checked : target.value;
    const {name} = target; // -> "userName"

    // this.setState({ [name]: value } ); // 1й вариант работы сетстейта - принимает объект

    // this.setState((prevState) => {
    //   return {
    //     data: {
    //       ...prevState.data,
    //       // userName -> старое значение
    //       // userAgeRange -> старое значение
    //       // userActiveStudent -> старое значение
    //       [name]: value,
    //       // userName: 'sdfsdf' -> новое значение
    //     },
    //   }
    // }); // 2й вариант работы сетстейта - принимает callback
    // колбэк должен вернуть объект JS, поля которого будет помещены в state

    // this.setState({ [name]: value }, callback ); // 3й вариант работы сетстейта - принимает объект
    // this.setState({ [name]: value }, () =>
    //  console.log('Только что поменялся стейт, вот его новое значение', this.state)
    // }


    this.setState((prevState) => ({
        data: {
          ...prevState.data,
          [name]: value,
        },
      }));
  };

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1>Class-based component</h1>

          <CounterHeader cnt={ this.state.counter } name="Some React name"   />
          <TextInput
            name="userName"
            value={ this.state.userName }
            onChange={ this.handleChange }
          />
          <br />
          <Select
            name="userAgeRange"
            value={ this.state.userAgeRange }
            onChange={ this.handleChange }
            options={ this.getSelectOptions() }
          />
          <br />
          <CheckBox
            name="userActiveStudent"
            value={ this.state.userActiveStudent }
            onChange={ this.handleChange }
            text="Студент отчислен"
          />
          <br />
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


function TextInput (props) {

  const {
    name,
    onChange,
    value,
  } = props;

  return (
    <input
      name={ name }
      type="text"
      value={ value }
      onChange={ onChange }
    />
  );
}

function Select(props) {
  const {
    name,
    onChange,
    value,
    options = [],
  } = props;

  function renderOption(item, index) {
    return (
      <option
        key={ index }
        value={ item }
        selected={ value === item }
      >
        { item }
      </option>
    );
  }

  return (
    <select
      name={ name }
      onChange={onChange}
    >
      {
        options.map(renderOption)
      }
    </select>
  );

}

function CheckBox(props) {
  const {
    name,
    onChange,
    checked,
    text = '',
  } = props;

  return (
    <div>
      <input
        name={ name }
        type="checkbox"
        checked={ checked }
        onChange={ onChange }
        style={{display: 'inline'}}
      /> &nbsp;
      <span>{ text }</span>
    </div>
    );
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



