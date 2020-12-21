import React from "react";

function AddPageButton({ handler }) {
	return (
		<button
			onClick={handler}
			className="sent-btn"
		>
			<img src="Svg\pen-fancy-solid.svg" width={25} />
			&nbsp;
			<p>أكــتب لــــــــي</p>
		</button>
	);
}

export default AddPageButton;
