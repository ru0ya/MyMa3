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
		<div style={{
			backgroundImage: `url("https://images.unsplash.com/photo-1543245883-b631737145f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
			backgroundRepeat: 'no-repeat',
			height: '100vh',
			width: '800px'
		}}>
			<input
				style={BarStyle}
				key="search-bar"
				value={input}
				placeholder={"Ngong"}
				onChange={handleChange}
			/>
		</div>
	);
}

export default SearchBar;
