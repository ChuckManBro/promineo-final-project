import React from 'react';

export default function WindAnimation({ windSpeed }) {
	let windAnimationDuration;
	// Adjust animation duration based on wind speed
	// If wind speed is higher than 27, animation duration will go no lower than 3
	windSpeed > 27 ? (windAnimationDuration = 3) : (windAnimationDuration = 12 - (windSpeed - 3) / 3);

	// Set duration of initial wind dots, and delay of repeating dots
	let initialAnimationDuration = windAnimationDuration * (2 / 3);
	let halfDelay = windAnimationDuration / 2;

	return (
		<div id="wind-animation-container">
			<svg className="wind-animation" width="1600" height="1600" viewBox="-800 -800 1600 1600">
				<mask id="wind-lines-mask">
					<rect x="-800" y="500" width="1600" height="4" fill="white" />
					<rect x="-800" y="400" width="1600" height="4" fill="white" />
					<rect x="-800" y="300" width="1600" height="4" fill="white" />
					<rect x="-800" y="200" width="1600" height="4" fill="white" />
					<rect x="-800" y="100" width="1600" height="4" fill="white" />
					<rect x="-800" y="0" width="1600" height="4" fill="white" />
					<rect x="-800" y="-100" width="1600" height="4" fill="white" />
					<rect x="-800" y="-200" width="1600" height="4" fill="white" />
					<rect x="-800" y="-300" width="1600" height="4" fill="white" />
					<rect x="-800" y="-400" width="1600" height="4" fill="white" />
					<rect x="-800" y="-500" width="1600" height="4" fill="white" />
				</mask>

				<defs>
					<linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
						<stop offset="0%" stopColor="#FFF" stopOpacity="0" />
						<stop offset="80%" stopColor="#FFF" stopOpacity="0.5" />
						<stop offset="100%" stopColor="#FFF" stopOpacity="1" />
					</linearGradient>
				</defs>

				<rect
					// INITIAL ANIMATION GRADIENT
					className="wind-gradient"
					x="0"
					y="-800"
					width="50"
					height="1600"
					fill="url(#fade)"
					opacity="0"
					mask="url(#wind-lines-mask)"
				>
					<animate
						attributeName="x"
						from="-200"
						to="400"
						dur={initialAnimationDuration}
						// repeatCount="indefinite"
					/>
					<animate
						attributeName="opacity"
						dur={initialAnimationDuration}
						// repeatCount="indefinite"
						values="0; 1; 1; 0"
						keyTimes="0; 0.2; 0.8; 1"
					/>
				</rect>

				<rect
					// FULL-LENGTH ANIMATION GRADIENT
					className="wind-gradient"
					x="0"
					y="-800"
					width="50"
					height="1600"
					fill="url(#fade)"
					// opacity=".5"
					mask="url(#wind-lines-mask)"
				>
					<animate
						attributeName="x"
						from="-400"
						to="400"
						dur={windAnimationDuration}
						repeatCount="indefinite"
						// begin={halfDelay}
					/>
					<animate
						attributeName="opacity"
						dur={windAnimationDuration}
						repeatCount="indefinite"
						values="0; 1; 1; 0"
						keyTimes="0; 0.2; 0.8; 1"
						// begin={halfDelay}
					/>
				</rect>

				<rect
					// DELAYED FULL-LENGTH ANIMATION GRADIENT
					className="wind-gradient"
					x="0"
					y="-800"
					width="50"
					height="1600"
					fill="url(#fade)"
					opacity="0"
					mask="url(#wind-lines-mask)"
				>
					<animate
						attributeName="x"
						from="-400"
						to="400"
						dur={windAnimationDuration}
						repeatCount="indefinite"
						begin={halfDelay}
					/>
					<animate
						attributeName="opacity"
						dur={windAnimationDuration}
						repeatCount="indefinite"
						values="0; 1; 1; 0"
						keyTimes="0; 0.2; 0.8; 1"
						begin={halfDelay}
					/>
				</rect>
			</svg>
		</div>
	);
}
