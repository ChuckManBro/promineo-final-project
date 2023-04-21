import { Navigate, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './navbar/NavBar';
import Current from './current/Current';
import ExpandedWx from './expandedWx/ExpandedWx';
import SliderDownPacking from './packing/SliderDownPacking';
import Links from './links/Links';
import LinksAdmin from './links/LinksAdmin';
import ConvertList from './packing/ConvertList';

const blankWxData = {
	now: {
		time: '',
		temp: '',
		direction: '',
		speed: 0,
		gusts: 0,
	},
	past: {
		time: [],
		temp: [],
		direction: [],
		speed: [],
		gusts: [],
	},
	future: {
		time: [],
		temp: [],
		direction: [],
		speed: [],
		gusts: [],
		precip: [],
	},
	sunrise: '',
	sunset: '',
};
const apiUrl = `https://64396d091b9a7dd5c9675e74.mockapi.io/basehog/links`;

function App() {
	const [wxData, setWxData] = useState(blankWxData);
	const [wxDescription, setWxDescription] = useState('');
	const [linksEditMode, setLinksEditMode] = useState(false);
	const [tempLinks, setTempLinks] = useState([]);
	const [waitingForData, setWaitingForData] = useState(true);

	useEffect(() => {
		getTempLinks();
		getNwsData();
		getMeteoData();
	}, []);

	//TEST - GET button used during testing
	function handleGetBtnClick() {
		console.log(`GET Button was clicked`);
		// getNwsData();
		// getMeteoData();
	}

	function getNwsData() {
		fetch(urlNWS, {
			headers: { 'User-Agent': 'basehog.com, temp3@chuckandmissy.com' },
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				// handle error
				console.log(`Error - Did not get an 'ok' from NWS`);
			})
			.then(rawData => {
				// Do something with the rawData
				setWxDescription(validateDesc(rawData.properties.textDescription));
			})
			.catch(error => {
				// handle error
				console.log(`Error - NWS response was 'ok', but something else went wrong`);
			});
	}

	function getMeteoData() {
		fetch(urlMeteo)
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				// handle error
				console.log(`Error - Did not get an 'ok' from Meteo`);
			})
			.then(rawData => {
				// Do something with the rawData

				// Set the current.css wind direction variable
				var root = document.documentElement;
				root.style.setProperty(
					'--direction-degrees',
					`${rawData.current_weather.winddirection}deg`
				);

				setWxData(convertMeteoData(rawData));
				setWaitingForData(false);
			})
			.catch(error => {
				// handle error
				console.log(`Error - Meto response was 'ok', but something else went wrong`);
			});
	}

	function getTempLinks() {
		fetch(apiUrl, {
			method: 'GET',
			headers: { 'content-type': 'application/json' },
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				// handle error
				console.log(`There was an error getting api data`);
			})
			.then(data => {
				// Do something with the data
				setTempLinks(data);
			})
			.catch(error => {
				// handle error
				console.log(`API GET successful, but something else went wrong`);
			});
	}

	return (
		<div id="app" className="container">
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={
						<Current
							wxData={wxData}
							wxDescription={wxDescription}
							waitingForData={waitingForData}
						/>
					}
				/>
				<Route path="/expanded_wx" element={<ExpandedWx wxData={wxData} />} />
				<Route path="/slider_down_packing" element={<SliderDownPacking />} />
				<Route path="/convert_list" element={<ConvertList />} />
				<Route
					path="/links"
					element={
						<Links
							linksEditMode={linksEditMode}
							setLinksEditMode={setLinksEditMode}
							tempLinks={tempLinks}
							setTempLinks={setTempLinks}
							apiUrl={apiUrl}
						/>
					}
				/>
				<Route path="/links/admin" element={<LinksAdmin setLinksEditMode={setLinksEditMode} />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			{/***** Testing Button START *****/}
			{/* <button id="get-button" onClick={handleGetBtnClick}>
				GET
			</button> */}
			{/***** Testing Button END *****/}
		</div>
	);
}

export default App;
