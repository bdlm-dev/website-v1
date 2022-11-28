import React, { Component } from 'react';

export default class Typer extends Component {
    constructor(props) {
        super(props);
        this.className = this.props.className;
        this.words = this.props.words;
        this.wordIndex = 0;
        this.i = 0;
        this.state = {
            content: this.props.children,
            currentWord: "",
        }
        console.log(this.words);

        this.nextWord = this.nextWord.bind(this);
        this.typeWord = this.typeWord.bind(this);
        this.hideWord = this.hideWord.bind(this);
        this.setWord = this.setWord.bind(this);
    }

    nextWord = () => {
        this.setState({ currentWord: this.words[this.wordIndex % this.words.length] });
        this.wordIndex++;
    }

    setWord = cont => {
        this.setState({ content: cont })
    }

    typeWord = () => {
        if (this.i <= this.state.currentWord.length) {
            this.setWord(this.state.currentWord.slice(0, this.i));
            this.i++;
            setTimeout(this.typeWord, 50);
        } else {
            setTimeout(this.hideWord, 750);
        }
    }

    hideWord = () => {
        if (this.i >= 0) {
            this.setWord(this.state.currentWord.slice(0, this.i));
            this.i--;
            setTimeout(this.hideWord, 50);
        } else {
            this.nextWord();
            this.i = 0;
            setTimeout(this.typeWord, 500);
        }
    }

    componentDidMount() {
        this.typeWord();
    }


    render() {
        return (
            <div className={this.className}>
                {this.state.content}
            </div>
        );
    }

}
