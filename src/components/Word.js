import React from 'react';

const Word = (props) =>{

    	return (
			<React.Fragment>
				<h2 className="ttu" style={props.getStatus === 'Correct' ? {color: 'green',letterSpacing: '2px'} 
							:props.getStatus === 'Incorrect' ? {color: 'red'}
							: {color: 'black',letterSpacing: '2px'}}>
					{props.children}
				</h2>
			</React.Fragment>
		)
	
}

export default Word;