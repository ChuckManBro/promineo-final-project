import React from 'react';

export default function PackingModal({ packModalOn, setPackModalOn, text, image }) {
	return (
		<>
			<dialog id='packing-modal' open={packModalOn}>
				<article>
					<a className="close" onClick={() => setPackModalOn(false)}></a>
					<div className="">
						<img src={`./packing-images/${image}`} alt="" />
						<p>{text}</p>
					</div>
					<button onClick={() => setPackModalOn(false)}>Close</button>
				</article>
			</dialog>
		</>
	);
}
