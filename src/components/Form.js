import React from 'react';

const Form = (props) => {	
	return (
			<div className="db-m">
				<input autoFocus className = "pa2 w-50 mt2 br2 b--black-20 ba mb1" disabled = {props.getStatus === 'Correct' ? true : false} onChange={props.changeEvent} placeholder = "What is the word?" value={props.getValue}/><br/>
				<div className="w-100 flex flex-wrap justify-center">
					<button className = {props.getStatus === 'Correct' ? 'w-20-m br2 mt2 ba b--dark-green bg-green white pa2 ml1 mv1 cursor-not-allowed border-box' : 'pointer w-20-m br2 mt2 ba b--dark-green bg-green white pa2 ml1 mv1 bg-animate hover-bg-dark-green border-box'} disabled = {props.getStatus === 'Correct' ? true : false} onClick={props.checkEvent} style={{marginRight: '10px'}}>Go</button>
					<button className = {props.getStatus === 'Correct' ? 'w-20-m br2 mt2 ba b--dark-red bg-red white pa2 ml1 mv1 cursor-not-allowed border-box' : 'pointer w-20-m br2 mt2 ba b--dark-red bg-red white pa2 ml1 mv1 bg-animate hover-bg-dark-red border-box'} disabled = {props.getStatus === 'Correct' ? true : false} onClick={props.shuffleEvent} style = {{marginRight: '10px'}}>Shuffle</button>
					<button className = {props.getStatus === 'Correct' ? 'pointer w-20-m br2 mt2 ba b--dark-blue bg-blue white pa2 ml1 mv1 bg-animate hover-bg-dark-blue border-box' : 'w-20-m br2 mt2 ba b--dark-blue bg-blue white pa2 ml1 mv1 cursor-not-allowed border-box'} onClick={props.nextEvent} disabled = {props.getStatus === 'Correct' ? false : true}>Next</button>
				</div>
				<div className="mt3">
					<i className={props.getStatus === 'Correct' ? 'green f6 bg-white br2' : 'red f6 bg-white br2'}>{props.getStatus}</i>
				</div>

			</div>
		)
}

export default Form; 