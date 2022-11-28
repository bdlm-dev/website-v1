import React, { Component } from 'react';
import styles from './About.module.scss';
import Typer from './Typer';

export default class About extends Component {

    render() {
        return (
            <div className={styles.about} style={this.props.style}>
                <div className={styles.top}>
                    <div className={styles.intro}>
                        Hi. I'm b
                    </div>
                    <div className={styles.love}>
                        I love&nbsp;
                    </div>
                    <Typer words={["being creative", "programming", "designing", "learning"]} className={styles.typer} />
                    <div className={styles.love}>
                        .
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.col}>
                        <span className={styles.title}>Interests</span>
                        <hr />
                        <ul>
                            <li>Software Development</li>
                            <li>UI/UX Design</li>
                            <li>Cryptography</li>
                            <li>Full Stack Developing</li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <span className={styles.title}>Experience with</span>
                        <hr />
                        <Skills elements={["Python", "C#", "JavaScript", "HTML", "CSS", "GIT", "Figma", "React"]} />
                    </div>
                </div>
            </div>
        );
    }
}

class Skills extends Component {
    constructor(props) {
        super(props);
        this.elements = props.elements;
    }

    render() {
        var items = this.elements.map((item, index) => <div key={index}> {item} </div>);

        return (
            <div className={styles.skills}>
                {items}
            </div>
        );
    }
}