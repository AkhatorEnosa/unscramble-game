import React from 'react';

const Counter = (props) => {
	return (
			<div className="b">
				Score: {props.getScore} / {props.getTotal}
			</div>
		)
}

export default Counter;