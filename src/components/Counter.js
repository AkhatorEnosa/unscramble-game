import React from 'react';

const Counter = (props) => {
	return (
			<div className="b f7 f6-ns flex flex-wrap justify-center tc pt0">
				<div className="pa2 bg-light-yellow">Gotten Words > {props.getScore}</div>
				<div className="pa2 bg-yellow">Attempting Word Number > {props.getWordCount}</div>
				<div className="pa2 bg-gold">Total Words > {props.getTotal} </div> 
			</div>
		)
}

export default Counter;