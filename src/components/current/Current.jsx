import React from 'react';
import './current.css';
import Splash from './Splash';
import Map from './Map';
import CurrentDetails from './CurrentDetails';

export default function Current({ wxData, wxDescription, waitingForData }) {
	return (
		<>
			{waitingForData ? (
				<Splash />
			) : (
				<div id="current-page">
					<Map wxData={wxData} />
					<CurrentDetails wxData={wxData} wxDescription={wxDescription} />
				</div>
			)}
		</>
	);
}
