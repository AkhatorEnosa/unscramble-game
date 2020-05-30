import React from 'react';
import Word from './Word';
import Form from './Form';
import Counter from './Counter';

const All = (props) =>{
		return (
			<div className="bg-white-60 pt2 pb4 br3 w-100 w-100-m">

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
