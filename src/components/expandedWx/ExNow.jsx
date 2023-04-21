import React from 'react';

export default function ExNow({ now }) {
	return (
		<>
			<tr className="tr-outline">
				<td>Now</td>
				<td>{now.temp}</td>
				<td>{now.direction}</td>
				<td>
					{now.speed}
					<span className="gusts-span">{now.gusts > now.speed + 3 ? `G${now.gusts}` : ''}</span>
				</td>
				<td></td>
			</tr>
		</>
	);
}
