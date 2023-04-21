import React from 'react';
import { NavLink } from 'react-router-dom';
import { LogoBaseHogDotCom, IconBaserig, IconLink, IconWind, IconWindSock } from '../icons';

export default function NavBar() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<LogoBaseHogDotCom />
					</li>
				</ul>

				<ul>
					<li className="padding-left-0">
						<NavLink role="button" to="/">
							<IconWindSock />
						</NavLink>
					</li>

					<li className="padding-left-0">
						<NavLink role="button" to="/expanded_wx">
							<IconWind />
						</NavLink>
					</li>

					<li className="padding-left-0">
						<NavLink role="button" to="/slider_down_packing">
							<IconBaserig />
						</NavLink>
					</li>

					<li className="padding-left-0">
						<NavLink role="button" to="/links">
							<IconLink />
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}
