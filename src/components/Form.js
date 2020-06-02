import React from 'react';

const Form = (props) => {	
	return (
			<div className="w-100">
				<input className = "input-reset w-70 w-70-m w-30-ns f7 f6-ns pa2 pa3-ns mt2 br2 ba bg-white-80 mb3" disabled = {props.getStatus === 'Correct' || props.getStatus === '1' ? true : false} onChange={props.changeEvent} placeholder = "What is the word?" value={props.getValue}/><br/>
				<div className="w-100 flex justify-center">
					<button  onClick={props.checkEvent} className = {props.getStatus === 'Correct' || props.getStatus === '1' ? 'w-20 w-20-m w-10-ns f7 f6-ns br2 mt2 ba b--dark-green bg-green white pa2 ml1 mv1 cursor-not-allowed border-box' : 'pointer w-20 w-20-m w-10-ns f7 f6-ns br2 mt2 ba b--dark-green bg-dark-green white pa2 ml1 mv1 bg-animate hover-bg-dark-green border-box'} disabled = {props.getStatus === 'Correct' || props.getStatus === '1' ? true : false}>Go</button>
					<button  onClick={props.shuffleEvent} className = {props.getStatus === 'Correct' || props.getStatus === '1' ? 'w-20 w-20-m w-10-ns f7 f6-ns br2 mt2 ba b--dark-red bg-red white pa2 ml1 mv1 cursor-not-allowed border-box' : 'pointer w-20 w-20-m w-10-ns f7 f6-ns br2 mt2 ba b--dark-red bg-dark-red white pa2 ml1 mv1 bg-animate hover-bg-dark-red border-box'} disabled = {props.getStatus === 'Correct' || props.getStatus === '1' ? true : false}>Shuffle</button>
					<button  onClick={props.nextEvent} disabled = {props.getStatus === 'Correct' || props.getStatus ? false : true} className = {props.getStatus === 'Correct' || props.getStatus === '1' ? 'pointer w-20 w-20-m w-10-ns f7 f6-ns br2 mt2 ba b--dark-blue bg-dark-blue white pa2 ml1 mv1 bg-animate hover-bg-dark-blue border-box' : 'w-20 w-20-m w-10-ns f7 f6-ns br2 mt2 ba b--dark-blue bg-blue white pa2 ml1 mv1 cursor-not-allowed border-box'}>Next</button>
					<button  onClick={props.showEvent} className = {props.getStatus === 'Correct' || props.getStatus === '1' ? 'w-20 w-20-m w-10-ns f7 f6-ns br2 mt2 ba b--gray bg-light-gray black pa2 ml1 mv1 border-box' : 'pointer w-20 w-20-m w-10-ns f7 f6-ns br2 mt2 ba b--gray bg-light-gray black pa2 ml1 mv1 bg-animate hover-bg-dark-gray hover-white border-box'} disabled = {props.getStatus === 'Correct' ? true : false}>Show Word</button>
				</div>
				<div className="w-100 flex justify-center">
					<span className={props.getStatus === 'Correct' ? 'w-80 border-box br1 f7 f6-ns pa3 mt2 green bg-washed-green' : 
																	'w-80 border-box br1 f7 f6-ns pa3 mt2 red bg-washed-red'} role="alert" style={props.getStatus === '' || props.getStatus === '1' ? {display: 'none'} : {display: 'block'}}>{props.getStatus}</span>
				</div>

			</div>
		)
}

export default Form; 