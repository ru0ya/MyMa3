import React from 'react';
import './App.css';
import "leaflet/dist/leaflet.css";

import Header from './components/layout/Header';
import MatStop from './components/containers/MatStop';


function App() {
	return (
		<>
			<Header />
			<MatStop />	
		</>
	);
}

export default App;
