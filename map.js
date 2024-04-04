import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


function MatStop() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	const [q, setQ] = useState("");
	const [searchParam] = useState(["stop_name", "route_nams"]);

	useEffect(() => {
		fetch("https://localhost:8000/matwana")
			.then((res) => res.join())
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
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>
	} else {
		return (
			<MapContainer
				center={[1.483, 36.8774]}
				zoom={15}
				style={{ height: "400px", width: "100%" }}
			>
				<TileLayer url="https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png" />
				{items.map((item) => (
					<Marker position={{item.latitude, item.longitude}} key={item.id}>
						<Popup>{item.stop_name}</Popup>
					</Marker>
				))}
			</MapContainer>
		);
	}
}

export default MatStop;

