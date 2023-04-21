import React from 'react';
import './expanded-wx.css';
import ExPast from './ExPast';
import ExNow from './ExNow';
import ExFuture from './ExFuture';
import { IconClock, IconDirection, IconPrecip, IconSpeed, IconThermometer } from '../icons';

export default function ExpandedWx({ wxData }) {
	return (
		<div>
			<table role="grid" className="children-centered">
				<thead>
					<tr>
						<th scope="col">
							<IconClock />
						</th>
						<th scope="col">
							<IconThermometer />
						</th>
						<th scope="col">
							<IconDirection />
						</th>
						<th scope="col">
							<IconSpeed />
						</th>
						<th scope="col">
							<IconPrecip />
						</th>
					</tr>
				</thead>
				<tbody>
					<ExPast past={wxData.past} />
					<ExNow now={wxData.now} />
					<ExFuture future={wxData.future} />
				</tbody>
			</table>
		</div>
	);
}
