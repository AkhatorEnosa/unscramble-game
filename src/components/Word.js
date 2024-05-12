import React from 'react';

const Word = (props) =>{

    	return (
			<React.Fragment>
				<h2 className={props.getStatus === 'Correct' ? "tracked b--black-20 f4 f2-ns pt4 pb2 ttu green" :
								props.getStatus === 'Incorrect' ? "tracked b--black-20 f4 f2-ns pt4 pb2 ttu red" :
								props.getStatus === '1' ? "tracked b--black-20 f4 f2-ns pt4 pb2 ttu light-blue" :
															"tracked b--black-20 f4 f2-ns pt4 pb2 white"}>
					{props.children}
				</h2>
			</React.Fragment>
		)
	
}

export default Word;