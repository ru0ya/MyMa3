import React, { useState } from "react";


function SearchBar({ onChange }) {
	const BarStyle = {width:"20rem", background:"#F0F0F0", border:"none", padding:"0.5rem"};
	const [input, setInput] = useState("");

	const handleChange = (event) => {
		const value = event.target.value;
		setInput(value);
		onChange(value);
	};

	
	return (
		<input
			style={BarStyle}
			key="search-bar"
			value={input}
			placeholder={"Ngong"}
			onChange={event => setInput(event.target.value)}
		/>
	);
}

export default SearchBar;
