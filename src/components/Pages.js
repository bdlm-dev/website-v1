import React, {Component} from 'react';
import './Pages.module.scss';

import {Home, About, Portfolio, Contact} from './';

export default class Pages extends Component {
    render() {
        /*
         allow for only loading the page the user is on for performance-
         but this site is very lightweight anyway so not necessary.
        if (this.props.pos === 0) {
            this.loadedElement = <Home />
        } else if (this.props.pos === 1) {
            this.loadedElement = <About />
        } else if (this.props.pos === 2) {
            this.loadedElement = <Portfolio />
        }
        */

        return (
            <div 
            className={"pages"}
            style={{
                transform: `translateX(${this.props.pos * -151}%)`,
                transition: `transform 500ms ease`,}}>
                <Home pos={this.props.pos} style={{overflow: (this.props.pos === 0) ? "visible" : "hidden"}}/>
                <About pos={this.props.pos} style={{overflow: (this.props.pos === 1) ? "visible" : "hidden"}}/>
                <Portfolio pos={this.props.pos} style={{overflow: (this.props.pos === 2) ? "visible" : "hidden"}}/>
                <Contact pos={this.props.pos} style={{overflow: (this.props.pos === 3) ? "visible" : "hidden"}}/>
            </div>
        );
    }
}
