import React from 'react';

const Word = (props) =>{

    	return (
			<React.Fragment>
				<h2 className="tracked b--black-20 f4 f2-ns pt4" style={props.getStatus === 'Correct' ? {color: 'green', textShadow: '0px 0px 0px yellow'} 
							:props.getStatus === 'Incorrect' ? {color: 'red', textShadow: '0px 0px px yellow'}
							: {color: 'white'}}>
					{props.children}
				</h2>
			</React.Fragment>
		)
	
}

export default Word;