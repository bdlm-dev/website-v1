import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Nav.module.scss';

class Arrow extends Component {
    constructor(props) {
        super(props);
        this.direction = props.direction;
        this.change = props.change;
        this.parentFunction = props.parentFunction;
    }

    render() {
        return(
            <div 
            className={this.direction} 
            id={`nav${this.direction}`} 
            style={{
                opacity: this.props.opacity,
                pointerEvents: this.props.opacity ? 'all' : 'none',
            }}
            onClick={() => this.parentFunction(this.change)}/>
        );
    }
}

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.pages = document.getElementById("pages");
        this.pos = props.pos;
        this.posmin = 0;
        this.posmax = 3;
        this.updatePos = props.updatePos;

        this.state = {
            left: 0,
            right: 0.8,
        }

        this.handleMove = this.handleMove.bind(this);
        this.clamp = this.clamp.bind(this);
        this.goTop = this.goTop.bind(this);
    }

    clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    goTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    handleMove = (increment=0) => {
        increment = parseInt(increment);
        if (this.pos+increment <= this.posmax && this.pos+increment >= this.posmin) {
            this.pos += increment;
            this.goTop();
        }

        this.pos = this.clamp(this.pos, this.posmin, this.posmax);
        this.updatePos(this.pos);

        if (this.pos === this.posmin) {
            this.setState({left : 0});
        } else {
            this.setState({left : 0.8});
        }

        if (this.pos === this.posmax) {
            this.setState({right : 0});
        } else {
            this.setState({right : 0.8});
        }
        return "Not at limits";
    }

    render() {
        return (
            <nav>
                <Arrow direction="Left" change="-1" parentFunction={this.handleMove} opacity={this.state.left}/>
                <Arrow direction="Right" change="1" parentFunction={this.handleMove} opacity={this.state.right}/>
            </nav>
        );
    }
}
