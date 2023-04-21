import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LinksAdmin({ setLinksEditMode }) {
	const navigate = useNavigate();

	useEffect(() => {
		setLinksEditMode(true);

		navigate('/links');
	});

	return <div>LinksAdmin</div>;
}
