import React from 'react';

const Word = (props) =>{

    	return (
			<React.Fragment>
				<h2 className="ttu b--black-20" style={props.getStatus === 'Correct' ? {color: 'green'} 
							:props.getStatus === 'Incorrect' ? {color: 'red'}
							: {color: 'white'}}>
					{props.children}
				</h2>
			</React.Fragment>
		)
	
}

export default Word;