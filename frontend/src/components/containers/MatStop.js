import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import SearchBar from "./SearchBar";


function MatStop() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		if (searchQuery) {
			fetch(`https://localhost:8000/matwana?query=${searchQuery}`)
				.then((res) => res.json())
				.then(
					(result) => {
						setIsLoaded(true);
						setItems(result);
					},
					(error) => {
						setIsLoaded(true);
						setError(error);
					}
				);
		}
	}, [searchQuery]);

	const handleSearch = (query) => {
		setSearchQuery(query);
	};

	if (error) {
		return <div>Error: {error.message}</div>;
		//else if (!isLoaded) {
		//return <div>Loading...</div>;
	} else {
		return (
			<div>
				<SearchBar onChange={handleSearch} />
				<MapContainer
					center={[-1.483, 36.8774]}
					zoom={15}
					style={{ height: "50px", width: "100%" }}
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
		);
	}
}

export default MatStop;
