import React from 'react';

export default function ExPast({ past }) {
	return (
		<>
			{past.time.map((el, i) => (
				<tr key={el}>
					<td>{convertHour(el)}</td>
					<td>{`${rnd(past.temp[i])}°`}</td>
					<td>{convertDirection(past.direction[i])}</td>
					<td>
						{rnd(past.speed[i])}
						<span className="gusts-span">
							{rnd(past.gusts[i]) > rnd(past.speed[i]) + 3 ? `G${rnd(past.gusts[i])}` : ''}
						</span>
					</td>
					<td></td>
				</tr>
			))}
		</>
	);
}
