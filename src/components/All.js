import React from 'react';
import Word from './Word';
import Form from './Form';
import Counter from './Counter';

const All = (props) =>{
		return (
			<div className="bg-light-gray pt2 pb4 br3 w-100">

				<Word getStatus = {props.status}>
					{props.status === 'Correct' ? props.word 
						: props.randomWord}
				</Word>

                <Counter getScore = {props.countScore} getTotal = {props.total}/>

				<Form  					  
					  checkEvent = {props.check}
	                  changeEvent = {props.track}
	                  shuffleEvent = {props.shuffle}
	                  nextEvent = {props.next}
	                  // reloadApi = {props.componentDidMount}
	                  getStatus = {props.status}
	                  getValue = {props.typedWord}/>
			</div>
		)
	
}

export default All;

// {props.capitalize(props.status === 'Correct' ? props.word : props.randomWord)}
