import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		var config = {
	    apiKey: "AIzaSyAw5uIZdlyPYjBuYoc8zRjbiv0-lxWANys",
	    authDomain: "playground-3f11f.firebaseapp.com",
	    databaseURL: "https://playground-3f11f.firebaseio.com",
	    projectId: "playground-3f11f",
	    storageBucket: "playground-3f11f.appspot.com",
	    messagingSenderId: "1016399993027"
	  };
	  firebase.initializeApp(config);
	}
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<LoginForm />
				</View>
			</Provider>
		);
	}
}

export default App;