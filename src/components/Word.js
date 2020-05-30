import React from 'react';

const Word = (props) =>{

    	return (
			<React.Fragment>
				<h2 className="tracked-mega b--black-20 f4 f2-ns pa3" style={props.getStatus === 'Correct' ? {color: 'green'} 
							:props.getStatus === 'Incorrect' ? {color: 'red'}
							: {color: 'white', textShadow: '0px 0px 2px #333'}}>
					{props.children}
				</h2>
			</React.Fragment>
		)
	
}

export default Word;