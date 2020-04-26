import React from 'react';
import '../Style/style.css'

const input = (props) => {
	return (
			<div className="input">
				<label for="inp"><b>Change Username:</b></label>
				<input type="text" onChange={props.change} value={props.text} id="inp"></input>
			</div>
		)
}


export default input;