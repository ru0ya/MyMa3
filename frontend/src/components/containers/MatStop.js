import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import SearchBar from"./SearchBar";


function MatStop() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		const getData = setTimeout(() => {
			if (searchQuery) {
				axios.get(`http://localhost:8000/matwana?query=${searchQuery}`)
					.then(
						(result) => {
							setIsLoaded(true);
							setItems(result.data);
						})
						.catch((error) => {
							setIsLoaded(true);
							setError(error);
						});
			}
		}, 2000)
		
		return () => clearTimeout(getData)
	}, [searchQuery]);

	const handleSearch = (query) => {
		setSearchQuery(query);
		console.log(items);
	};

	if (error) {
		return <div>Error: {error.message}</div>;
	/*
	else if (!isLoaded) {
		return <div>Loading...</div>;
		*/
	} else {
		return (
			<>
				<SearchBar onChange={handleSearch} />
				<div id="map">
					<MapContainer
						center={[-1.483, 36.8774]}
						zoom={15}
						style={{ height: "400px", width: "800px" }}
					>
						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
						{items.map((item) => (
							<Marker
								position={[item.stop_lat, item.stop_lon]}
								key={item.stop_id}
							>
								<Popup>{item.stop_name}</Popup>
							</Marker>
						))}
					</MapContainer>
				</div>
			</>
		);
	}
}

export default MatStop;
