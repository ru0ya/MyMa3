import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header';
import SearchBar from './components/containers/SearchBar';
import MatStop from './components/containers/MatStop';
import useFetch from "./hooks/useFetch";


function App() {
  return (
	  <div>
		<Header />
		<SearchBar />
		<MatStop />
	  </div>
  );
}

export default App;
