import React from 'react';
import '../Style/style.css'

const output = (props) => {
	return (
			<div className="output">
				<p>{props.name}</p>
				<p>{props.children} </p>
			</div>
		)
}

export default output;