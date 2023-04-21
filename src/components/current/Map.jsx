import React from 'react';
import WindAnimation from './WindAnimation';
import { IconNorthCompass } from '../icons';

export default function Map({ wxData }) {
	return (
		<div id="perrine-map">
			<svg
				id="map-windsock"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="-15.5 9 41 12.4"
				width="45px"
			>
				<path
					id="windsock-color1"
					fill="orangered"
					d="M6.167 9.172a1 1 0 0 0-.965 1v10a1 1 0 0 0 1.164.986l18-3a1 1 0 0 0 .836-.986v-4a1 1 0 0 0-.836-.986l-18-3a1 1 0 0 0-.2-.014Z"
				/>

				<path
					fill="#fff"
					d="M9.188 11.656v7l4-.625v-5.687l-4-.688ZM17.218 13l-.03 4.344 4.03-.688-.03-2.968-3.97-.688Z"
				/>
				<circle id="windsock-pole" cx="5" cy="15.2" r="2" fill="#555555" />
			</svg>
			{/* Show WindAnimation only if wind speed is >= 3mph */}
			{wxData.now.speed >= 3 && <WindAnimation windSpeed={wxData.now.speed} />}
			<IconNorthCompass />
		</div>
	);
}
