import React from 'react';
import './links.css';
import { linksData } from './links-data';
import TempLinks from './TempLinks';

export default function Links({ linksEditMode, setLinksEditMode, tempLinks, setTempLinks, apiUrl }) {
	return (
		<div>
			<h4 className="page-title">Useful Links:</h4>

			{linksData.map(el => (
				<div key={el.btnText} className="link-row">
					<a className="btn-link" href={el.url} target="_blank">
						{el.btnText}
					</a>
					<p className="inline">{el.description}</p>
				</div>
			))}

			<TempLinks
				tempLinks={tempLinks}
				setTempLinks={setTempLinks}
				linksEditMode={linksEditMode}
				setLinksEditMode={setLinksEditMode}
				apiUrl={apiUrl}
			/>
		</div>
	);
}
