import React from 'react';

const Word = (props) =>{

    	return (
			<React.Fragment>
				<h2 className={props.getStatus === 'Correct' ? "tracked b--black-20 f4 f2-ns pt4 pb2 ttc green" :
								props.getStatus === 'Incorrect' ? "tracked b--black-20 f4 f2-ns pt4 pb2 ttc red" :
								props.getStatus === '1' ? "tracked b--black-20 f4 f2-ns pt4 pb2 ttc light-blue" :
															"tracked b--black-20 f4 f2-ns pt4 pb2 ttc white"} style={{textShadow: "0px 0px 0px #333"}}>
					{props.children}
				</h2>
			</React.Fragment>
		)
	
}

export default Word;