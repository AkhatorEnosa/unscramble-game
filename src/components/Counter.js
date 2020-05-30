import React from 'react';

const Counter = (props) => {
	return (
			<div className="b f7 f6-ns">
				<p>Gotten Words > {props.getScore}</p>
				<p>Attempting Word Number > {props.getWordCount}</p>
				<p>Total Words > {props.getTotal} </p> 
			</div>
		)
}

export default Counter;