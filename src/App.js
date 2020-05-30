import React, { Component } from 'react';
import './App.css';
import All from './components/All';

class App extends Component { 
  constructor() {
    super();

    //Initialise the states
      this.state = {
        word: '',
        typedWord: '',
        loading: true,
        status: '',
        randomWord: '',
        score: 0,
        fired: false,
        words: [],
        number: 0,
        wordCount: 0
      }

  }


  // check if component has mounted then call api and setState
  async componentDidMount(){
      const url = "https://random-word-api.herokuapp.com/word?number=1";
      const response = await fetch(url);
      const word = await response.json();

      this.setState({
          loading: false,
          word: word[0],
          randomWord: this.randWord(word[0]), //Randomize the gotten word
          wordCount: this.state.wordCount + 1
      })

      // console.log(this.state.word);
      // console.log(this.state.wordCount);
  }


  // Capitalize the first letter of a string
  // capitalizeFirstLetter = (word) => {
  //   const newLetter = word[0].toUpperCase() + word.slice(1)

  //   return newLetter;
  // }

  // get the value of input field
  trackWord = (e) => {
    this.setState({
      typedWord: e.target.value
    });
  }


  // checking for errors and others
  checkWord = (e) => {
    if (this.state.word === this.state.typedWord.toLowerCase()){
       if(!this.state.words.includes(this.state.typedWord.toLowerCase())) {
           this.setState({ 
            status : 'Correct', typedWord: '',
            score: this.state.score + 1, 
            words: [...this.state.words, this.state.typedWord.toLowerCase()]
          });
       }else {
        this.setState({ status : 'Please wait for new word to finish loading first', typedWord: ''});
       }

    }else { 
      this.setState({ status : 'Incorrect', typedWord: ''});
    }

    if(this.state.typedWord.length === 0) {
      this.setState({ status: 'Field cannot be empty'});
    }
  }

  // shuffling a string
  shuffleWord = () => {
      this.setState({
        randomWord: this.randWord(this.randWord(this.state.word))
      });
  }


  // Re-call componentDidMount and set states again
  reloadComponents = () => {
    this.componentDidMount();
      this.setState({
        typedWord: '',
        status: '',
        randomWord: ' '
      });
  }


  // getting next word
  nextWord = () => {
    this.reloadComponents();
  }


// Randomize word
  randWord = (str) => {
    let newWord = str.split('').sort(()=>(Math.random()-0.5)).join('');
    return newWord;
  }


// Reload App
  reloadApp = () => {
    window.location.reload(false);
  }


// How many words to Unscramble
unscrambleCount = (e) => {
  this.setState({
    number : e.target.value
  });
}


// Go to main components app
fireMainComponent = () => {
  if(this.state.number === '') {
     alert('Field cannot be empty')
    }else if ((this.state.number === '---Select Number---') || (this.state.number === 0)) {
      alert('Choose a valid number')
    } else{
      this.setState({
        fired: true
      })
    }
}

showWord = (e) => {

   if(!this.state.words.includes(this.state.word)) {
       this.setState({ 
        status : '1', typedWord: this.state.word,
        score: this.state.score, 
        randomWord : this.state.word,
        words: [...this.state.words, this.state.typedWord]
      });
    }
}

   render () {

      const { status,score,typedWord,word,randomWord,loading,number,fired, wordCount } = this.state;


        if (wordCount > 1 && wordCount > number){
          return (
            <div className="tc pa6">
                <h2 className="f1 red">Oops!!! Maybe lucky next time!!!</h2>
                <p className="red">You tried your best but could not unscramble all the words correctly. Your total score is <span className="b"> {score}</span>.</p>
                <button className = "pointer w-30 br2 mt2 ba b--dark-blue bg-blue white pa2 ml1 mv1 bg-animate hover-bg-dark-blue" onClick = {this.reloadApp}>Try Again</button>
            </div>
          )

        } else if ((score > 0) && (score == number)){ 
            return (
            <div className="tc pa6">
                <h2 className="f1 green">Congratulations!!!!</h2>
                <p className="green">You have successfully answered all {this.state.number} questions completely. </p>
                <button className = "pointer w-30 br2 mt2 ba b--dark-red bg-orange white pa2 ml1 mv1 bg-animate hover-bg-red" onClick = {this.reloadApp}>Restart</button>
            </div>
          )
        } else if (loading){ 
            return <div className="tc mt7 white">Loading...</div>
        } else if(!word.length){
            return <div className="tc">Did not get a word</div>
        } else if (fired === true){
          return (
            <div className="tc pa5">
              <h1 className="w-100-ns f1-ns tc white">Unscrambled</h1>
                <All 
                  getStatus = {status}
                  capitalize = {this.capitalizeFirstLetter}
                  word = {word}
                  randomWord = {randomWord}

                  check = {this.checkWord}
                  track = {this.trackWord}
                  shuffle = {this.shuffleWord}
                  next = {this.nextWord}
                  show = {this.showWord}
                  status = {status}
                  typedWord = {typedWord}
                  countScore = {score}
                  total = {number}
                  wordC = {wordCount}
                />
            </div>
          )
        }else{ 

        return (
            <div className = "tc pa5">
              <h1 className="w-100-ns f1-ns tc white">Unscrambled</h1>
              <p className="green ">How many words do you want to Unscramble?</p>

              <div className="w-100 flex flex-wrap justify-center">
                <select className = "w-30-ns pa2 mt2 br2 ba" onChange = {this.unscrambleCount} autoFocus>
                  <option>---Select Number---</option>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                  <option>25</option>
                </select>

                <button className = "w-10-ns pointer br2 mt2 ba b--dark-green bg-green white pa2 ml1 bg-animate hover-bg-dark-green border-box" onClick = {this.fireMainComponent}>Go</button>
              </div>
            </div>
          )
      }
   }
}

export default App;
