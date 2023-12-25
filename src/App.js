import React from "react";

function App() {
	let r = '<b>React</b>'
	let rn = 'React Naitive'
	const el = (
		<div>
			Create Web & Mobile Apps <br />
			with <span dangerouslySetInnerHTML={{__html:r}} /> & {rn}
		</div>
	)
	return el 
}

export default App;
