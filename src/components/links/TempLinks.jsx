import React, { useState } from 'react';

const blankLink = {
	id: `new`,
	btnText: ``,
	url: ``,
	description: ``,
};

export default function TempLinks({
	tempLinks,
	setTempLinks,
	linksEditMode,
	setLinksEditMode,
	apiUrl,
}) {
	const [linkModalActive, setLinkModalActive] = useState(false);
	const [modalId, setModalId] = useState();
	const [modalBtnText, setModalBtnText] = useState('');
	const [modalUrl, setModalUrl] = useState('');
	const [modalDescription, setModalDescription] = useState('');

	function openLinkModal(link) {
		setModalId(link.id);
		setModalBtnText(link.btnText);
		setModalUrl(link.url);
		setModalDescription(link.description);
		setLinkModalActive(true);
	}

	function handleSaveClick(e) {
		e.preventDefault();
		const newLink = {
			btnText: modalBtnText,
			url: modalUrl,
			description: modalDescription,
		};
		setLinkModalActive(false);

		// POST or PUT to api depending on if 'new'
		if (modalId === 'new') {
			postLink(newLink);
			// Provide the new link with a unique id to satisfy React map. API does not need.
			newLink.id = Date.now();
			setTempLinks([...tempLinks, newLink]);
			setLinksEditMode(false);
		} else {
			updateLink(modalId, newLink);
		}
	}

	function postLink(newLink) {
		fetch(apiUrl, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(newLink),
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				// handle error
				console.log(`Error trying to POST to api`);
			})
			.then(task => {
				// do something with the new task
				console.log(`Successful POST to api`);
				console.log(task);
			})
			.catch(error => {
				// handle error
				console.log(`POST successful, but something else went wrong`);
			});
	}

	function updateLink(id, newLink) {
		// Update on Front-End
		const index = tempLinks.findIndex(link => link.id === id);
		newLink.id = id;
		let newTempLinksArray = tempLinks;
		newTempLinksArray[index] = newLink;
		setTempLinks(newTempLinksArray);

		// Update on Back-End
		fetch(`${apiUrl}/${id}`, {
			method: 'PUT',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(newLink),
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				// handle error
				console.log(`Error trying to save update to the api`);
			})
			.then(task => {
				// Do something with updated task
				console.log(`PUT to api successful`);
				console.log(task);
			})
			.catch(error => {
				// handle error
			});
	}

	function handleDeleteClick(id) {
		// Delete on Front-End
		setTempLinks(tempLinks.filter(link => link.id !== id));

		// Delete on Back-End
		fetch(`${apiUrl}/${id}`, {
			method: 'DELETE',
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				// handle error
				console.log(`Error trying to DELETE to api`);
			})
			.then(task => {
				// Do something with deleted task
				console.log(`Successful DELETE to api`);
			})
			.catch(error => {
				// handle error
			});
	}

	function handleDoneClick(e) {
		e.preventDefault();
		setLinkModalActive(false);
	}

	// If tempLinks is an empty array, return early
	if (tempLinks == []) return;

	return (
		<div>
			{tempLinks.map(el => (
				<div key={el.id} className="link-row">
					<a className="btn-link" href={el.url} target="_blank">
						{el.btnText}
					</a>
					<p className="inline">{el.description}</p>
					{linksEditMode && (
						<div>
							<button className="link-edit-btn contrast" onClick={() => openLinkModal(el)}>
								Edit
							</button>
							<button className="link-edit-btn contrast" onClick={() => handleDeleteClick(el.id)}>
								Delete
							</button>
						</div>
					)}
				</div>
			))}
			{linksEditMode && <button onClick={() => openLinkModal(blankLink)}>Create New Link</button>}
			{linksEditMode && (
				<button className="contrast" onClick={() => setLinksEditMode(false)}>
					Done
				</button>
			)}

			{/********* MODAL - Create or Edit Link *********/}

			<dialog open={linkModalActive}>
				<article id="link-modal">
					<a className="close" onClick={() => setLinkModalActive(false)}></a>
					<form>
						<h5>ID: {modalId}</h5>
						<label>
							Button text:
							<input
								type="text"
								value={modalBtnText}
								onChange={e => setModalBtnText(e.target.value)}
							/>
						</label>

						<label>
							URL:
							<input type="text" value={modalUrl} onChange={e => setModalUrl(e.target.value)} />
						</label>

						<label>
							Description:
							<textarea
								rows="5"
								value={modalDescription}
								onChange={e => setModalDescription(e.target.value)}
							/>
						</label>
						<div id="link-modal-buttons">
							<button id="tester" onClick={e => handleSaveClick(e)}>
								Save
							</button>
							<button className="contrast" onClick={e => handleDoneClick(e)}>
								Cancel
							</button>
						</div>
					</form>
				</article>
			</dialog>
		</div>
	);
}
