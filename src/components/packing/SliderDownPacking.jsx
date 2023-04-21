import React from 'react';
import './packing.css';
import { IconEye, IconVideo } from '../icons';
import PackingModal from './PackingModal';
import { useState } from 'react';

export default function SliderDownPacking() {
	const [packModalOn, setPackModalOn] = useState(false);
	const [modalText, setModalText] = useState(``);
	const [modalImage, setModalImage] = useState(``);

	return (
		<>
			<h4 className="page-title">Slider-Down Packing Steps</h4>

			{packingSteps.map((element, index) =>
				element.subSteps[0] ? (
					<details key={element.primaryStep}>
						<summary className="primary-step">{`${index + 1}. ${element.primaryStep}`}</summary>
						{element.video && (
							<a
								href={element.video}
								target="_blank"
								role="button"
								className="outline btn-packing-video"
							>
								<IconVideo />
							</a>
						)}
						<ol type="a">
							{element.subSteps.map((subStep, i) => (
								<li key={i}>
									{subStep.text}
									{subStep.image && (
										<button
											role="button"
											className="secondary btn-packing-img"
											onClick={() => {
												setModalText(subStep.text);
												setModalImage(subStep.image);
												setPackModalOn(true);
											}}
										>
											<IconEye />
										</button>
									)}
								</li>
							))}
						</ol>
					</details>
				) : (
					<p key={element.primaryStep} className="primary-step empty-accordion-line">{`${
						index + 1
					}. ${element.primaryStep}`}</p>
				)
			)}

			<PackingModal
				packModalOn={packModalOn}
				setPackModalOn={setPackModalOn}
				text={modalText}
				image={modalImage}
			/>
		</>
	);
}
