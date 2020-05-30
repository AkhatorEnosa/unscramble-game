import React from 'react';
import Word from './Word';
import Form from './Form';
import Counter from './Counter';

const All = (props) =>{
		return (
			<div className="w-100 w-100-m bg-white-50 br3 pb3">

				<Word getStatus = {props.status}>
					{props.status === 'Correct' ? props.word 
						: props.randomWord}
				</Word>

                <Counter 
                	getScore = {props.countScore} 
                	getTotal = {props.total} 
                	getWordCount = {props.wordC}
                />

				<Form  					  
					  checkEvent = {props.check}
	                  changeEvent = {props.track}
	                  shuffleEvent = {props.shuffle}
	                  nextEvent = {props.next}
	                  showEvent = {props.show}
	                  // reloadApi = {props.componentDidMount}
	                  getStatus = {props.status}
	                  getValue = {props.typedWord}
	             />
			</div>
		)
	
}

export default All;

// {props.capitalize(props.status === 'Correct' ? props.word : props.randomWord)}
