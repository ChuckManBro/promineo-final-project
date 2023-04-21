import React, { useState } from 'react';

export default function ConvertList() {
	const [newList, setNewList] = useState('');
	const [newJson, setNewJson] = useState('');

	function convertToJson() {
		const listArray = newList.split('\n');
		let packingArray = [];
		let primaryIndex = -1;
		let subStepsIndex;

		listArray.map(item => {
			if (item.substring(0, 1) === '*') {
				primaryIndex++;
				subStepsIndex = -1;
				packingArray.push({ primaryStep: item.substring(2), subSteps: [] });
			}

			if (item.substring(0, 4) === '   *') {
				packingArray[primaryIndex] = { ...packingArray[primaryIndex], videoUrl: item.substring(5) };
			}

			if (item.substring(0, 7) === '      *') {
				subStepsIndex++;
				packingArray[primaryIndex].subSteps.push({ text: item.substring(8), image: '' });
			}

			if (item.substring(0, 10) === '         *') {
				packingArray[primaryIndex].subSteps[subStepsIndex].image = item.substring(11);
			}
		});

		setNewJson(JSON.stringify(packingArray));
	}

	return (
		<div id="App" className="container">
			<label>txt UL:</label>
			<textarea rows="20" value={newList} onChange={e => setNewList(e.target.value)}></textarea>
			<button onClick={convertToJson}>Convert to JSON</button>
			<label>JSON:</label>
			<code>{newJson}</code>
		</div>
	);
}
