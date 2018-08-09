import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Form, Field} from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
	await sleep(300);
	window.alert(JSON.stringify(values));
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
				<button
					type="submit"
					onClick={() =>
						document
							.getElementById("exampleForm")
							.dispatchEvent(new Event("submit"))
					}
				>
					External Submit via <code>document.getElementById()</code>
				</button>
				<Form
					onSubmit={onSubmit}
					initialValues={{firstName: "hogehoge"}}
					render={({handleSubmit, form, values}) => (
						<form onSubmit={handleSubmit} id="exampleForm">
							<div>
								<label>First Name</label>
								<Field
									name="firstName"
									component="input"
									type="text"
									placeholder="First Name"
									/>
							</div>
							<button type="submit">
								Submit
							</button>
						</form>
					)}
				/>
      </div>
    );
  }
}

export default App;
