import React from 'react';
import { IconSunrise, IconSunset } from '../icons';

export default function CurrentDetails({ wxData, wxDescription }) {
	const details = `${wxData.now.temp} ${wxDescription}`;

	return (
		<div id="current-details">
			{details !== ' ' && (
				<article id="current-box1">
					Wind: {wxData.now.direction} {wxData.now.speed}
					<span className="gusts-span">
						{wxData.now.gusts > wxData.now.speed + 3 ? `G${wxData.now.gusts}` : ''}
					</span>
				</article>
			)}

			{wxData.sunrise !== '' && (
				<article id='current-box2'>
					{details}
					<div id="sunrise-sunset">
						<IconSunrise />
						<IconSunset />
						<p>{wxData.sunrise}</p>
						<p>{wxData.sunset}</p>
					</div>
				</article>
			)}
		</div>
	);
}
