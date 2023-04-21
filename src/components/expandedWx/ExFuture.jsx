import React from 'react';

export default function ExFuture({ future }) {
	return (
		<>
			{future.time.map((el, i) => (
				<tr key={el}>
					<td>{convertHour(el)}</td>
					<td>{`${rnd(future.temp[i])}°`}</td>
					<td>{convertDirection(future.direction[i])}</td>
					<td>
						{rnd(future.speed[i])}
						<span className="gusts-span">
							{rnd(future.gusts[i]) > rnd(future.speed[i]) + 3 ? `G${rnd(future.gusts[i])}` : ''}
						</span>
					</td>
					<td>{future.precip[i] === 0 ? '' : `${future.precip[i]}%`}</td>
				</tr>
			))}
		</>
	);
}
